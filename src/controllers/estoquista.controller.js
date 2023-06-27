const createKnex = require('../context')

estoquistasex = createKnex();


const knex = createKnex();

const EstoquistaController = {
    async buscarEstoquistas(req, res) {
        let estoquistas = await knex('ESTOQUISTA').select('*');
        return res.json(estoquistas);
    },

    async inserirEstoquista(req, res) {
        const estoquista = req.body;
        let result = await knex('ESTOQUISTA').insert(estoquista);
        if(!result) return res.status(400).json({msg:'estoquista does not inserted'});
        return res.status(200).json({msg:'estoquista inserted'});
    },
}

module.exports = EstoquistaController;