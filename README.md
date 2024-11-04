# Moscow Rogaining Event Platform

A full-stack web application for managing orienteering and rogaining events in Moscow. The platform includes user registration, event participation tracking, and administrative features.

## Features

- User Authentication
  - Phone number verification via voice call
  - User profile management
  - Role-based access control (admin/user)
- Event Management
  - Multiple event formats (Rogaining, Labyrinth, Sport Orienteering)
  - Family participation tracking
  - Checkpoint verification system
- Admin Dashboard
  - Real-time participant tracking
  - Results export to CSV
  - User management
- Responsive Design
  - Mobile-first approach
  - Interactive event schedule
  - Dynamic content sections

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- React Query for data fetching
- React Router for navigation
- Axios for HTTP requests
- Context API for state management

### Backend
- Node.js with Express
- TypeScript
- MongoDB for data storage
- JWT for authentication
- Digital Direct API integration for phone verification

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── admin.ts
│   │   │   ├── auth.ts
│   │   │   └── question.ts
│   │   └── database.ts
│   └── index.ts
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── contexts/
    │   ├── hooks/
    │   └── utils/
    ├── public/
    └── index.html
```

## Getting Started

### Prerequisites

- Node.js 16+
- MongoDB 4.4+
- Docker and Docker Compose (optional)

### Environment Variables

#### Backend
```env
MONGODB_URI=mongodb://localhost:27017/rogain24
DB_NAME=rogain24
PORT=3000
DIGITAL_DIRECT_TOKEN=your_token_here
```

#### Frontend
```env
VITE_BACKEND_URL=http://localhost:3000/api
```

### Local Development

1. Clone the repository
```bash
git clone https://github.com/your-repo/moscow-rogaining.git
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Start the development servers
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm run dev
```

### Docker Deployment

Use the provided docker-compose.yml to deploy the application:

```bash
docker-compose up -d
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/verify` - Verify phone number
- `POST /api/auth/name` - Update user profile
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/logout` - Logout user

### Questions
- `GET /api/question/:id` - Get question details
- `POST /api/question/:id/answer` - Submit answer

### Admin
- `GET /api/admin/users` - Get all users data
- `GET /api/admin/users/csv` - Export users data to CSV

## License

This project is licensed under the MIT License - see the LICENSE file for details
