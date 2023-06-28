const createKnex = require('../context');

const knex = createKnex();

let idProduto = 0;
let idEstoque = 0;
let idVenda = 0;
let idFuncionario = 0;

const ProdutoController = {
  async buscarProduto(req, res) {
    let produtos = await knex('PRODUTO').select('*');
    return res.json(produtos);
  },

  async inserirProduto(req, res) {
    const produto = req.body;
    
    // Gera os IDs para o novo produto
    const novoIdProduto = ++idProduto;
    const novoIdEstoque = ++idEstoque;
    const novoIdVenda = ++idVenda;
    const novoIdFuncionario = ++idFuncionario;

    // Define os IDs no objeto do produto
    produto.id_produto = novoIdProduto;
    produto.id_estoque = novoIdEstoque;
    produto.id_venda = novoIdVenda;
    produto.id_funcionario = novoIdFuncionario;

    let result = await knex('PRODUTO').insert(produto);
    if (!result) return res.status(400).json({ msg: 'Product was not inserted' });
    return res.status(200).json({ msg: 'Product inserted' });
  },
};

module.exports = ProdutoController;
