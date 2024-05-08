

const express = require('express');
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware.authenticateUser, expenseController.createExpense);
router.get('/', authMiddleware.authenticateUser, expenseController.getAllExpenses);

module.exports = router;
