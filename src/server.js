const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const db = require('./configuraciones/db');
const Modelos = require('./modelos/index.model');


//inicio del servidor   
const server = express();
server.set('port', 3001);
server.use(morgan('common'));
server.use(cors());

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors({
    origin: '*',
    methods: 'GET'
}));

// server.use('/api/usuarios', require('./rutas/usuariosroute'));
server.use('/api/costosBeneficio', require('./rutas/DimCostoBeneficio.route'));


server.listen(server.get('port'), () => {
    console.log('URL:' + 'http://localhost:' + server.get('port') + '/api');

    db.authenticate().then(() => {
        console.log('Conexion con DB exitosa');
        
        
        Modelos.CrearModelos();
    })
        .catch((error) => {
            console.log('error al conectar la DB');
            console.error(error);
        })
});

