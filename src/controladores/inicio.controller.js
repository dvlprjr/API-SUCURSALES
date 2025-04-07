exports.Inicio = (req, res) => {
    const SIGE={
        api: "API REST",
        version: "1.0",
        descripcion: "REST-API",
        propiedad: "COMPAÑIA FINANCIERA SA (COFISA)",
        desarrollador: "César Herrera",
        fecha: "04-2025",
        modulos:[
            {No:1, nombre: 'CostosBeneficio', ruta: '/api/costosBeneficio/listar'},
            

        ]
    }
    res.json(SIGE);
};