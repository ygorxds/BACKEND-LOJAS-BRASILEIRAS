const vision = require('@google-cloud/vision');
const fs = require('fs');
const path = require('path');

// Inicializa o cliente da Vision API
const client = new vision.ImageAnnotatorClient();

// Configurar o multer
const multer = require('multer');

// Configuração do multer para armazenar a imagem temporariamente
const upload = multer({ dest: 'uploads/' });

const ImageProcessingController = {
    async processImage(req, res) {
        try {
            // Verifica se o arquivo foi enviado
            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            // Caminho do arquivo de imagem recebido via upload
            const imagePath = path.resolve(req.file.path);

            // Lê o arquivo de imagem e converte para Base64
            const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });

            // Converte a imagem de base64 para buffer
            const buffer = Buffer.from(imageBase64, 'base64');

            // Envia a imagem para o Vision API
            const [result] = await client.labelDetection({ image: { content: buffer } });

            // Pega os rótulos detectados na imagem
            const labels = result.labelAnnotations.map(label => label.description);

            // Apaga o arquivo temporário
            fs.unlinkSync(imagePath);

            // Retorna os rótulos como resposta
            return res.status(200).json({ items: labels });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to process image', error: error.message });
        }
    }
}

module.exports = { ImageProcessingController, upload };
