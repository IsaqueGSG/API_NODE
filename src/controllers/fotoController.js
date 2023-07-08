const multer = require('multer');

const database = require('../config/database');
const multerConfig = require('../config/multerConfig');
const Foto = require('../models/fotoModel');

database.sync();

const upload = multer(multerConfig).single('foto');

exports.store = async (req, res) => upload(req, res, async (err) => {
  if (err) {
    return res.status(400).json({
      errors: [err.code],
    });
  }

  try {
    const { originalname, filename } = req.file;
    const { pessoaId } = req.body;

    const foto = await Foto.create({ pessoaId, originalname, filename });

    return res.json({ foto, pessoaId });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

exports.get = async (req, res) => {
  try {
    const { id } = req.params;
    const resultGet = id ? await Foto.findByPk(id) : await Foto.findAll();
    res.json(resultGet);
  } catch (e) {
    res.json({ e });
  }
};

exports.update = async (req, res) => {
  try {
    const foto = await Foto.findByPk(req.params.id);
    foto.pessoaId = req.body.pessoaId;
    await foto.save();
    res.json(
      {
        msg: 'registro atualizado',
        foto,
      },
    );
  } catch (e) {
    res.json({ e });
  }
};

exports.delete = async (req, res) => {
  try {
    await Foto.destroy({ where: { id: req.params.id } });
    res.json({ msg: `Registro de id ${req.params.id} excluido` });
  } catch (e) {
    res.json({ e });
  }
};
