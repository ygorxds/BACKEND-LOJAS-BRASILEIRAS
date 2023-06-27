const createKnex = require('../context')

const knex = createKnex();

const EstoqueController = {
    async buscarEstoque(req, res) {
        let estoques = await knex('ESTOQUE').select('*');
        return res.json(estoques);
    },

    async inserirEstoque(req, res) {
        const estoque = req.body;
        let result = await knex('ESTOQUE').insert(estoque);
        if(!result) return res.status(400).json({msg:'estoque does not inserted'});
        return res.status(200).json({msg:'estoque inserted'});
    },
}

module.exports = EstoqueController;