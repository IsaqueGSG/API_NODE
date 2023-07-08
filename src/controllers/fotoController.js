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
