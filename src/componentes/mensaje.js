const mensaje = (msj, estado, data, errores, res) =>{
    var mensajes = {
        MSJ: msj,
        DATA: data,
        ERRORES: errores
    };
    res.setHeader('Content-Type', 'application/json');
    res.statusCode=estado;
    res.json(mensajes);
}
module.exports = mensaje;