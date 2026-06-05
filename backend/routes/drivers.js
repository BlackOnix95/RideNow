const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authMiddleware } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const query = 'SELECT id, name, rating FROM users WHERE role = $1';
    const result = await pool.query(query, ['driver']);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/register', authMiddleware, async (req, res) => {
  try {
    const query = 'UPDATE users SET role = $1 WHERE id = $2 RETURNING id, name, email, role';
    const result = await pool.query(query, ['driver', req.user.id]);
    res.json({ message: 'Driver registration successful', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;