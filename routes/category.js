const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post("/", categoryController.save);
router.get("/", categoryController.showAll);

module.exports = router;