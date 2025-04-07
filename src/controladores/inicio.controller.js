exports.Inicio = (req, res) => {
    const SIGE={
        api: "API REST",
        version: "1.0",
        descripcion: "REST-API",
        propiedad: "César Herrera",
        desarrollador: "César Herrera",
        fecha: "",
        modulos:[
            {nombre: 'Sucursales', ruta: '/api/Sucursales'},
            

        ]
    }
    res.json(SIGE);
};