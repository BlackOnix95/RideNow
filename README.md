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

## Getting Started

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/BlackOnix95/RideNow.git
cd RideNow

# Backend setup
cd backend
npm install
cp .env.example .env
npm run migrate
npm start

# Frontend setup (new terminal)
cd frontend
npm install
cp .env.example .env
npm start
```

### Using Docker
```bash
docker-compose up -d
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Rides
- `GET /api/rides` - Get all rides
- `POST /api/rides` - Create a new ride
- `GET /api/rides/:id` - Get ride details
- `PUT /api/rides/:id/accept` - Accept a ride (Driver)
- `PUT /api/rides/:id/complete` - Complete a ride

### Drivers
- `GET /api/drivers` - Get available drivers
- `POST /api/drivers/register` - Register as driver

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Admin
- `GET /api/admin/statistics` - Get platform stats
- `GET /api/admin/users` - Manage users
- `GET /api/admin/rides` - View all rides

## License

MIT License - see LICENSE file for details

## Support

For support, open an issue on GitHub.

---

Built with ❤️ by the RideNow Team