const express = require('express');
const empresaCont = require('../controllers/empresaController');
const router = express.Router();

router.route("/").get(empresaCont.getAll).post(empresaCont.create)
router.route("/:id").get(empresaCont.one).put(empresaCont.update).delete(empresaCont.delete)

module.exports = router; 