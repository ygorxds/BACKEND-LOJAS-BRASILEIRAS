const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/produtos.controller');


 router.get('/buscarProdutos',ProdutoController.buscarProduto)
 router.post('/criarProduto',ProdutoController.inserirProduto)

module.exports = router;