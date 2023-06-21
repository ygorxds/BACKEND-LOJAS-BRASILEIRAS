const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');


router.get('/buscarUsuario',ClienteController.buscar)
router.post('/criarUsuario',ClienteController.inserirCliente)

module.exports = router;