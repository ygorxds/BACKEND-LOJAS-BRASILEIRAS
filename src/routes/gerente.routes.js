const express = require('express');
const router = express.Router();

const GerenteController = require('../controllers/gerente.controller');


 router.get('/listarGerentes',GerenteController.buscarGerentes)
 router.post('/criarGerente',GerenteController.inserirGerente)

module.exports = router;