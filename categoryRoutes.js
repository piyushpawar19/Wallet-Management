

const express = require('express');
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware.authenticateUser, categoryController.getAllCategories);
router.post('/', authMiddleware.authenticateUser, categoryController.createCategory);
router.delete('/:categoryId', authMiddleware.authenticateUser, categoryController.deleteCategory);

module.exports = router;
