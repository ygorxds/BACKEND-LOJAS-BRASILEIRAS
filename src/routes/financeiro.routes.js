const express = require('express');
const router = express.Router();

const FinanceiroController = require('../controllers/financeiro.controller');


 router.get('/listarFinanceiro',FinanceiroController.buscarFinancas)
 router.post('/criarFinanceiro',FinanceiroController.inserirFinancas)

module.exports = router;