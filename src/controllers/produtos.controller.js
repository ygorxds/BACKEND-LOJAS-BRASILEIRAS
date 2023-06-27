const createKnex = require('../context')

const knex = createKnex();

const ProdutoController = {
    async buscarProduto(req, res) {
        let produtos = await knex('PRODUTO').select('*');
        return res.json(produtos);
    },

    async inserirProduto(req, res) {
        const produto = req.body;
        let result = await knex('PRODUTO').insert(produto);
        if(!result) return res.status(400).json({msg:'product does not inserted'});
        return res.status(200).json({msg:'product inserted'});

    },
}

module.exports = ProdutoController;