const express = require('express');
const router = express.Router();

const clientesRoutes = require('./clientes.routes');
const produtoRoutes = require ('./produtos.routes');
const estoqueRoutes = require( './estoque.routes');
const estoquistaRoutes = require ('./estoquista.route');
const financeiroRoutes = require('./financeiro.routes');
const gerenteRoutes = require('./gerente.routes');
const vendaRoutes = require('./venda.routes');

router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/cliente',clientesRoutes);
router.use('/produto',produtoRoutes);
router.use('/estoque',estoqueRoutes);
router.use('/estoquista', estoquistaRoutes);
router.use('/financeiro', financeiroRoutes);
router.use('/gerente', gerenteRoutes);
router.use('/venda', vendaRoutes);


module.exports = router;