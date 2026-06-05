const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const query = 'SELECT * FROM rides ORDER BY created_at DESC LIMIT 50';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { pickup_location, dropoff_location, distance, fare } = req.body;
    const passenger_id = req.user.id;
    const query = 'INSERT INTO rides (passenger_id, pickup_location, dropoff_location, distance, fare, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const result = await pool.query(query, [passenger_id, pickup_location, dropoff_location, distance, fare, 'pending']);
    res.status(201).json({
      message: 'Ride created successfully',
      ride: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const query = 'SELECT * FROM rides WHERE id = $1';
    const result = await pool.query(query, [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Ride not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id/accept', authMiddleware, async (req, res) => {
  try {
    const query = 'UPDATE rides SET driver_id = $1, status = $2 WHERE id = $3 RETURNING *';
    const result = await pool.query(query, [req.user.id, 'accepted', req.params.id]);
    res.json({ message: 'Ride accepted', ride: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id/complete', authMiddleware, async (req, res) => {
  try {
    const query = 'UPDATE rides SET status = $1, completed_at = NOW() WHERE id = $2 RETURNING *';
    const result = await pool.query(query, ['completed', req.params.id]);
    res.json({ message: 'Ride completed', ride: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;