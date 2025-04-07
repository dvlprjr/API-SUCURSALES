const DimCostoBeneficio = require('../modelos/DimCostoBeneficio.model');
const MSJ = require('../componentes/mensaje');

exports.Listar = async (req, res) => {
    try {
        const listaCostoBeneficio = await DimCostoBeneficio.findAll();
        // Limpiar los espacios en blanco al final de las cadenas
        const listaLimpiada = listaCostoBeneficio.map(item => ({
            ...item.get({ plain: true }), // Obtener un objeto plano del modelo Sequelize
            //Operador ternario condición ? expresiónSiVerdadera : expresiónSiFalsa
            NombreCostoBeneficio: item.NombreCostoBeneficio ? item.NombreCostoBeneficio.trim() : null,
            Zona: item.Zona ? item.Zona.trim() : null,
            Zonificacion: item.Zonificacion ? item.Zonificacion.trim() : null,
            ClasiBantrab: item.ClasiBantrab ? item.ClasiBantrab.trim() : null,
            // Limpia otros campos de cadena según sea necesario
        }));

        MSJ('Peticion Listar Costos Beneficios ejecutada correctamente', 200, listaLimpiada, [], res);
    } catch (error) {
        console.error('Error al listar Costos Beneficios:', error);
        MSJ('Error al listar Costos Beneficios', 500, [], [`${error}`], res);
    }
};