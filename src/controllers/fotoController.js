const multer = require('multer');

const database = require('../config/database');
const multerConfig = require('../config/multerConfig');
const Foto = require('../models/fotoModel');

database.sync();

const upload = multer(multerConfig).single('foto');

module.exports = async (req, res) => upload(req, res, async (err) => {
  if (err) {
    return res.status(400).json({
      errors: [err.code],
    });
  }

  try {
    const { originalname, filename } = req.file;
    // eslint-disable-next-line camelcase
    const { id_pessoa } = req.body;
    // eslint-disable-next-line camelcase
    const foto = await Foto.create({ id_pessoa, originalname, filename });

    return res.json(foto);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
