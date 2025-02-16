const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post("/", categoryController.createProduct);
router.get("/", categoryController.showAllCategories);

module.exports = router;