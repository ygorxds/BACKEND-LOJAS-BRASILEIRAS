const express = require('express');
const router = express.Router();
const { ImageProcessingController, upload } = require('../controllers/imageProcessing');

// Defina a rota POST para o processamento de imagem com upload de arquivos
router.post('/process-image', upload.single('image'), ImageProcessingController.processImage);

module.exports = router;
