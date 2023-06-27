const express = require('express');
const router = express.Router();

const FuncionarioController = require('../controllers/funcionario.controller');


 router.get('/listarFuncionario',FuncionarioController.buscarFuncionario)
 router.post('/criarFuncionario',FuncionarioController.inserirFuncionario)

module.exports = router;