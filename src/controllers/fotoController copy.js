const multer = require('multer');

const database = require('../config/database');
const multerConfig = require('../config/multerConfig');

database.sync();

const upload = multer(multerConfig).single('foto');

module.exports = async (req, res) => {
  try {
    const { originalname, filename } = req.file;
    // eslint-disable-next-line camelcase
    const { id_pessoa } = req.body;
    // eslint-disable-next-line camelcase
    const foto = await Foto.create({ id_pessoa, originalname, filename });

    return res.json(foto);
  } catch (e) {
    res.json({ e });
  }
};
