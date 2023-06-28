const express = require('express');
const router = express.Router();

const VendaController = require('../controllers/venda.controller');


 router.get('/listarVendas',VendaController.buscarVendas)
 router.post('/criarVenda',VendaController.inserirVenda)

module.exports = router;
