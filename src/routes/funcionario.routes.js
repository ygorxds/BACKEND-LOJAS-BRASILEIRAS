const express = require('express');
const router = express.Router();

const FuncionarioController = require('../controllers/funcionario.controller');


 router.get('/listarFinanceiro',FuncionarioController.buscarFuncionario)
 router.post('/criarFinanceiro',FuncionarioController.inserirFuncionario)

module.exports = router;