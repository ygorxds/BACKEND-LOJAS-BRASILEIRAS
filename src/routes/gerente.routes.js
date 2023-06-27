const express = require('express');
const router = express.Router();

const GerenteController = require('../controllers/gerente.controller');


 router.get('/listarFinanceiro',GerenteController.buscarGerentes)
 router.post('/criarFinanceiro',GerenteController.inserirGerente)

module.exports = router;