const Pessoa = require('../models/pessoaModel');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const resultGet = id ? await Pessoa.findByPk(id) : await Pessoa.findAll();
    res.json(resultGet);
  } catch (e) {
    res.json({ e });
  }
};
