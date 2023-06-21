const express = require('express');
const router = express.Router();

const clientesRoutes = require('./clientes.routes');
const produtoRoutes = require ('./produtos.routes');

router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/cliente',clientesRoutes);
router.use('/produto',produtoRoutes);


module.exports = router;