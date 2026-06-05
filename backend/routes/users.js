const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authMiddleware } = require('../middleware/auth');

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const query = 'SELECT id, name, email, phone, role, rating FROM users WHERE id = $1';
    const result = await pool.query(query, [req.user.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, phone } = req.body;
    const query = 'UPDATE users SET name = $1, phone = $2 WHERE id = $3 RETURNING id, name, email, phone, role';
    const result = await pool.query(query, [name, phone, req.user.id]);
    res.json({ message: 'Profile updated successfully', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;