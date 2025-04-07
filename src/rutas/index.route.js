const express = require('express');
const router = express.Router();
const controladorCostosBeneficio = require('../controladores/DimCostoBeneficio.controller');
const controladorInicio = require('../controladores/inicio.controller');



router.get('/', controladorInicio.Inicio);
router.get('/costosBeneficio', controladorCostosBeneficio.Listar);

module.exports = router;