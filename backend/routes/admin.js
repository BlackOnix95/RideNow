const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/statistics', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const userCount = await pool.query('SELECT COUNT(*) FROM users');
    const rideCount = await pool.query('SELECT COUNT(*) FROM rides');
    const completedRides = await pool.query('SELECT COUNT(*) FROM rides WHERE status = $1', ['completed']);
    res.json({
      totalUsers: userCount.rows[0].count,
      totalRides: rideCount.rows[0].count,
      completedRides: completedRides.rows[0].count
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const query = 'SELECT id, name, email, role, created_at FROM users LIMIT 100';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/rides', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const query = 'SELECT * FROM rides ORDER BY created_at DESC LIMIT 100';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;