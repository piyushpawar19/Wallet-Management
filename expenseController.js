

const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
  try {
    const { title, date, amount, category } = req.body;
    const newExpense = new Expense({ title, date, amount, category, user: req.userId });
    await newExpense.save();
    res.status(201).json({ message: 'Expense created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


