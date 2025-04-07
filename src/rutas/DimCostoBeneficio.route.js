const express = require('express');
const router = express.Router();
const dimCostoBeneficioController = require('../controladores/DimCostoBeneficio.controller');

router.get('/listar', dimCostoBeneficioController.Listar); // Define la ruta para listar

module.exports = router;