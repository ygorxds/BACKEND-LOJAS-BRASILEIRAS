const createKnex = require('../context')

const knex = createKnex();

const ProdutoController = {
    async buscar(req, res) {
        let clientes = await knex('PRODUTO').select('*');
        return res.json(clientes);
    },

   
    async inserirCliente(req, res) {
        const cliente = req.body;
        let result = await knex('PRODUTO').insert(cliente);
        if(!result) return res.status(400).json({msg:'user does not inserted'});
        return res.status(200).json({msg:'user inserted'});

    },
}

module.exports = ProdutoController;