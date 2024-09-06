const express = require('express');
const router = express.Router();

const vendaRoutes = require('./venda.routes');
const ImageProcessingRouter = require('./imageProcessing.routes')

router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/venda', vendaRoutes);
router.use('/image', ImageProcessingRouter);


module.exports = router;