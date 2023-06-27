const createKnex = require('../context')

const knex = createKnex();

const FinanceiroController = {
    async buscarFinancas(req, res) {
        let financas = await knex('FINANCEIRO').select('*');
        return res.json(financas);
    },

    async inserirFinancas(req, res) {
        const financa = req.body;
        let result = await knex('FINANCEIRO').insert(financa);
        if(!result) return res.status(400).json({msg:'financy does not inserted'});
        return res.status(200).json({msg:'financy inserted'});
    },
}

module.exports = FinanceiroController;