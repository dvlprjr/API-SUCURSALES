const costosBeneficio = require("./DimCostoBeneficio.model");


exports.CrearModelos = async () => {

    // Sync costos-beneficios model 
    await costosBeneficio.sync();
    console.log('Modelo costosBeneficio Creado correctamente');

};