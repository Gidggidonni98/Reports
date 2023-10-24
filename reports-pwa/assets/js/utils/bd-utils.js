// POST -> Gestiones de datos registro o actualización pasen por aqui

const incidences = new PouchDB('incidences');

const saveIncidence = (incidence) => {
    return incidences.post(incidence);
}