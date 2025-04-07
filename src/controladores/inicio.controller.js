exports.Inicio = (req, res) => {
    const SIGE={
        api: "API-SIGE",
        descripcion: "REST-API",
        propiedad: "César Herrera",
        desarrollador: "Ing. César Herrera",
        fecha: "",
        modulos:[
            {nombre: 'Sucursales', ruta: '/api/Sucursales'},
            

        ]
    }
    res.json(SIGE);
};