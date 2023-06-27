const createKnex = require('../context');

const knex = createKnex();

const GerenteController = {
    async buscarGerentes(req, res) {
        let gerentes = await knex('GERENTE').select('*');
        return res.json(gerentes);
    },

    async inserirGerente(req, res) {
        const gerente = req.body;
        let result = await knex('GERENTE').insert(gerente);
        if(!result) return res.status(400).json({msg:'product does not inserted'});
        return res.status(200).json({msg:'product inserted'});
    },
}

module.exports = GerenteController;