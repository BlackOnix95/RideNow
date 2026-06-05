# RideNow - Modern Ride-Sharing Platform

A full-stack ride-sharing application built with React, Node.js/Express, and PostgreSQL.

## Features

- 🔐 User Authentication (Signup/Login)
- 🚗 Ride Booking System
- 👨‍💼 Driver Management
- 📊 Admin Dashboard
- 💳 Payment Integration Ready
- 🗺️ Real-time Location Tracking (Ready)
- 📱 Responsive Design

## Tech Stack

### Frontend
- React 18
- React Router
- Axios
- TailwindCSS
- Google Maps API

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- Stripe (Payment Ready)

### DevOps
- Docker
- Docker Compose

## Project Structure

```
RideNow/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── backend/            # Node.js/Express API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/BlackOnix95/RideNow.git
cd RideNow
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Configure your database and API keys
npm run migrate
npm start
```

3. **Setup Frontend**
```bash
cd frontend
npm install
cp .env.example .env
# Configure API endpoints
npm start
```

4. **Using Docker (Optional)**
```bash
docker-compose up -d
```

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/ridenow
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_key
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_key
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Rides
- `GET /api/rides` - Get all rides
- `POST /api/rides` - Create a new ride
- `GET /api/rides/:id` - Get ride details
- `PUT /api/rides/:id/accept` - Accept a ride (Driver)
- `PUT /api/rides/:id/complete` - Complete a ride

### Drivers
- `GET /api/drivers` - Get available drivers
- `POST /api/drivers/register` - Register as driver
- `PUT /api/drivers/:id/status` - Update driver status

### Admin
- `GET /api/admin/statistics` - Get platform stats
- `GET /api/admin/users` - Manage users
- `GET /api/admin/rides` - View all rides

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password_hash VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(500),
  role ENUM('passenger', 'driver', 'admin'),
  rating FLOAT DEFAULT 5.0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Rides Table
```sql
CREATE TABLE rides (
  id SERIAL PRIMARY KEY,
  passenger_id INTEGER REFERENCES users(id),
  driver_id INTEGER REFERENCES users(id),
  pickup_location VARCHAR(500) NOT NULL,
  dropoff_location VARCHAR(500) NOT NULL,
  distance FLOAT,
  duration INTEGER,
  fare DECIMAL(10, 2),
  status ENUM('pending', 'accepted', 'in_progress', 'completed', 'cancelled'),
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);
```

## Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Deployment

### Heroku
```bash
heroku create ridenow-app
heroku config:set NODE_ENV=production
git push heroku main
```

### AWS/DigitalOcean
See deployment guides in `/docs/deployment`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@ridenow.app or open an issue on GitHub.

## Roadmap

- [ ] Real-time GPS tracking
- [ ] Payment gateway integration
- [ ] In-app messaging
- [ ] Ride sharing/splitting
- [ ] Carbon offset tracking
- [ ] Accessibility improvements
- [ ] Mobile app (React Native)

---

Built with ❤️ by the RideNow Team