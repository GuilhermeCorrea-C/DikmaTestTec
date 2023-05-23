const express = require('express');
const areaCont = require('../controllers/areaController');
const router = express.Router();

router.route("/").get(areaCont.getAll).post(areaCont.create);
router.route("/:id").get(areaCont.one).put(areaCont.update).delete(areaCont.delete);

module.exports = router;
