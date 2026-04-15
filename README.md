# Developer's Tinder - A Dating App for Programmers

A modern, feature-rich dating application specifically designed for developers and tech professionals to find meaningful connections.

## Features

- **User Authentication**: Secure signup/login with JWT tokens
- **Profile Management**: Create detailed dev profiles with tech stacks, GitHub links, portfolio
- **Real-time Matching**: Swipe-based matching system with real-time notifications
- **Messaging**: Socket.io powered real-time messaging between matched users
- **Image Upload**: AWS S3 integration for profile pictures
- **Search & Filter**: Find developers by location, tech stack, experience level
- **Notifications**: Real-time match and message notifications
- **Redis Caching**: Fast lookups and real-time features
- **Rate Limiting**: API protection against abuse

## Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- MongoDB (local or cloud)
- Redis (optional, for caching)
- AWS S3 account (optional, for image uploads)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd developers-tinder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - MongoDB connection string
   - JWT secret key
   - AWS credentials (for image uploads)
   - Redis URL (if using caching)

4. **Start MongoDB (if running locally)**
   ```bash
   mongod
   ```

5. **Start the server**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000`

## Project Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Request handlers
├── models/         # Database schemas
├── routes/         # API routes
├── middleware/     # Custom middleware
├── services/       # Business logic
├── utils/          # Utility functions
├── socket/         # Socket.io handlers
└── server.js       # Entry point

tests/              # Test files
scripts/            # Seed and utility scripts
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh JWT token

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/upload-images` - Upload profile images
- `GET /api/users/search` - Search and filter users

### Matches
- `POST /api/matches/swipe` - Swipe right or left
- `GET /api/matches/suggestions` - Get match suggestions
- `GET /api/matches` - Get all matches
- `DELETE /api/matches/:id` - Unmatch user

### Messages
- `GET /api/messages/:matchId` - Get conversation
- `POST /api/messages` - Send message
- `GET /api/messages` - Get all conversations

## Development

### Running Tests
```bash
npm test
```

### Database Seeding
```bash
npm run seed
```

### Environment Setup
For development, MongoDB can run locally or use MongoDB Atlas cloud:
```bash
# Local MongoDB
mongod

# Or update MONGODB_URI in .env for cloud
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/developers-tinder
```

## Technologies Used

- **Backend**: Express.js, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.io
- **Authentication**: JWT, bcryptjs
- **File Storage**: AWS S3
- **Caching**: Redis
- **Validation**: Joi, Validator.js
- **Testing**: Jest, Supertest
- **Deployment Ready**: Helmet, CORS, Rate Limiting, Morgan

## Environment Variables

See `.env.example` for all available configuration options.

## License

MIT

## Support

For issues and feature requests, please create an issue in the repository.
