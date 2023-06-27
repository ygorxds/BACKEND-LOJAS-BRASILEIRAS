const express = require('express');
const router = express.Router();

const VendaController = require('../controllers/venda.controller');


 router.get('/listarFinanceiro',VendaController.buscarVendas)
 router.post('/criarFinanceiro',VendaController.inserirVenda)

module.exports = router;