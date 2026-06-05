const pool = require('../config/database');

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(20),
        password_hash VARCHAR(255) NOT NULL,
        profile_picture VARCHAR(500),
        role VARCHAR(50) DEFAULT 'passenger',
        rating FLOAT DEFAULT 5.0,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS rides (
        id SERIAL PRIMARY KEY,
        passenger_id INTEGER REFERENCES users(id),
        driver_id INTEGER REFERENCES users(id),
        pickup_location VARCHAR(500) NOT NULL,
        dropoff_location VARCHAR(500) NOT NULL,
        distance FLOAT,
        duration INTEGER,
        fare DECIMAL(10, 2),
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW(),
        completed_at TIMESTAMP
      )
    `);

    console.log('✓ Database tables created successfully');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error creating tables:', error);
    process.exit(1);
  }
};

createTables();