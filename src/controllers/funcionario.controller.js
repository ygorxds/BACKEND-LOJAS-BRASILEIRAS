const createKnex = require('../context')

const knex = createKnex();

const FuncionarioController = {
    async buscarFuncionario(req, res) {
        let funcionarios = await knex('FUNCIONARIO').select('*');
        return res.json(funcionarios);
    },

    async inserirFuncionario(req, res) {
        const funcionario = req.body;
        let result = await knex('FUNCIONARIO').insert(funcionario);
        if(!result) return res.status(400).json({msg:'employ does not inserted'});
        return res.status(200).json({msg:'employ inserted'});
    },
}

module.exports = FuncionarioController;