const { Router } = require('express');
const controladorInicio = require('../controladores/inicio.controller');
const controladorCostosBeneficio = require('../controladores/DimCostoBeneficio.controller');
const controladorInicio = require('../controladores/inicio.controller');

const rutas = Router();


rutas.get('/', controladorInicio.Inicio);
rutas.get('/costosBeneficio', controladorCostosBeneficio.Listar);
