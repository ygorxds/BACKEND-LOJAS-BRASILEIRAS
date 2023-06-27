const express = require('express');
const router = express.Router();

const EstoquistaController = require('../controllers/estoquista.controller');


 router.get('/listarEstoquistas',EstoquistaController.buscarEstoquistas)
 router.post('/criarEstoquista',EstoquistaController.inserirEstoquista)

module.exports = router;