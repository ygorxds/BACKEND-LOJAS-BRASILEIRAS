const createKnex = require('../context')

const knex = createKnex();

const VendaController = {
    async buscarVendas(req, res) {
        let vendas = await knex('VENDA').select('*');
        return res.json(vendas);
    },

    async inserirVenda(req, res) {
        const venda = req.body;
        let result = await knex('VENDA').insert(venda);
        if(!result) return res.status(400).json({msg:'Sale does not inserted'});
        return res.status(200).json({msg:'Sale inserted'});
    },
}

module.exports = VendaController;