const updateDynamicCache = (dynamicCache, req, res) => {
  if (res.ok) {
    return caches.open(dynamicCache).then((cache) => {
      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
};

const updateStaticCache = async (staticCache, req, APP_SHELL_INMUTABLE) => {
  if (APP_SHELL_INMUTABLE.includes(req.url)) {
    //No hace falta actualizar
  } else {
    let response = null;

    try {
      response = await fetch(req);
    } catch (error) {
      console.log(error);
    }
    return updateDynamicCache(staticCache, req, response);
  }
};

const apiSaveIncidence = (cacheName, req) => {
  if (
    req.url.indexOf(
<<<<<<< HEAD
      "/api/notification" >= 0 || 
      req.url.indexOf("/api/notification/subscribe") >= 0
=======
      "/api/notification" >= 0 || req.url.indexOf("/api/notification/subscribe") >= 0
>>>>>>> 1eb9d6c89f374cffe5ac0cff3620b8c8caeb2b0f
    )
  ) {
    return fetch(req);
  }

  if (req.clone().method === "POST") {
    if (self.registration.sync && !navigator.onLine) {
      return req
        .clone()
        .text()
        .then((body) => {
          return saveIncidence(JSON.parse(body))
        
        });
    }
    return fetch(req);
  }else{
    return fetch(req).then((response) => {
      if(response.ok){
<<<<<<< HEAD
        updateDynamicCache(cacheName, req, response.clone());
=======
        updateDynamicCache(cacheName, req, response);
>>>>>>> 1eb9d6c89f374cffe5ac0cff3620b8c8caeb2b0f
      }else{
        return caches.match(req);
      }
    }).catch((error) => {
        return caches.match(req);
    });
  }
};
