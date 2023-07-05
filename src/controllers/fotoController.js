const multer = require('multer');

const database = require('../config/database');
const multerConfig = require('../config/multerConfig');

database.sync();

const upload = multer(multerConfig).single('foto');

module.exports = async (req, res) => {
  try {
    await upload(req, res, (err) => {
      if (err) {
        res.status(400).json({
          err,
        });
      }
      res.send(req.file);
    });
  } catch (e) {
    res.json({ e });
  }
};
