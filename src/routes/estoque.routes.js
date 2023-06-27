const express = require('express');
const router = express.Router();

const EstoqueController = require('../controllers/estoque.controller')


 router.get('/listarEstoque',EstoqueController.buscarEstoque)
 router.post('/criarEstoque',EstoqueController.inserirEstoque)

module.exports = router;