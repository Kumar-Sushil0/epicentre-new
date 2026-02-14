# The Silent Club - Backend API

Complete backend API for The Silent Club resort booking system built with Node.js, Express, and MongoDB.

## Features

- **User Management**: Registration, login, profile management with JWT authentication
- **Room Management**: CRUD operations for accommodation options
- **Activity Management**: Manage wellness, solitude, expression, and experience activities
- **Residency Programs**: Handle long-term residency bookings
- **Dining Options**: Manage meal plans and dining services
- **Booking System**: Complete booking workflow with status tracking
- **RESTful API**: Clean, organized API endpoints
- **Data Validation**: Mongoose schema validation
- **Error Handling**: Comprehensive error handling middleware

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **Validation**: express-validator
- **Logging**: Morgan

## Installation

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/epicentre
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

5. Start MongoDB (if running locally):
```bash
mongod
```

6. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Rooms
- `GET /api/rooms` - Get all rooms (with filters)
- `GET /api/rooms/:id` - Get single room
- `POST /api/rooms` - Create room (Admin)
- `PUT /api/rooms/:id` - Update room (Admin)
- `DELETE /api/rooms/:id` - Delete room (Admin)

### Activities
- `GET /api/activities` - Get all activities (with filters)
- `GET /api/activities/:id` - Get single activity
- `POST /api/activities` - Create activity (Admin)
- `PUT /api/activities/:id` - Update activity (Admin)
- `DELETE /api/activities/:id` - Delete activity (Admin)

### Residencies
- `GET /api/residencies` - Get all residencies
- `GET /api/residencies/:id` - Get single residency
- `POST /api/residencies` - Create residency (Admin)
- `PUT /api/residencies/:id` - Update residency (Admin)
- `DELETE /api/residencies/:id` - Delete residency (Admin)

### Dining
- `GET /api/dining` - Get all dining options
- `GET /api/dining/:id` - Get single dining option
- `POST /api/dining` - Create dining option (Admin)
- `PUT /api/dining/:id` - Update dining option (Admin)
- `DELETE /api/dining/:id` - Delete dining option (Admin)

### Bookings
- `GET /api/bookings` - Get all bookings (with filters)
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/:id` - Update booking
- `PUT /api/bookings/:id/cancel` - Cancel booking
- `DELETE /api/bookings/:id` - Delete booking (Admin)

### Health Check
- `GET /api/health` - Server health check

## Query Parameters

### Rooms
- `category` - Filter by room category (private, shared, tent, dark, community)
- `available` - Filter by availability (true/false)
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter

### Activities
- `category` - Filter by category (experience, wellness, solitude, expression)
- `subCategory` - Filter by subcategory
- `available` - Filter by availability
- `difficulty` - Filter by difficulty level

### Bookings
- `status` - Filter by status (pending, confirmed, cancelled, completed)
- `paymentStatus` - Filter by payment status
- `userId` - Filter by user ID

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "count": 10
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (development only)"
}
```

## Authentication

Protected routes require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Models

### User
- name, email, password (hashed)
- phone, role (user/admin)
- preferences, avatar
- timestamps

### Room
- name, description, category
- price, capacity, images
- amenities, features
- availability, totalRooms
- timestamps

### Activity
- title, description, category
- icon, images, price
- duration, capacity
- schedule, requirements
- difficulty, availability
- timestamps

### Residency
- title, description, category
- duration, price, capacity
- inclusions, schedule
- practitioner info
- availability, startDates
- timestamps

### Dining
- name, description, category
- price, images, mealType
- dietaryOptions
- servingTimes, availability
- timestamps

### Booking
- user, bookingType
- checkIn, checkOut, guests
- items (array of booked items)
- totalAmount, status
- paymentStatus, paymentMethod
- contactInfo, specialRequests
- timestamps

## Development

```bash
# Install nodemon globally (optional)
npm install -g nodemon

# Run in development mode
npm run dev
```

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use a production MongoDB instance (MongoDB Atlas recommended)
3. Set strong `JWT_SECRET`
4. Enable HTTPS
5. Set up proper CORS configuration
6. Use environment variables for sensitive data
7. Implement rate limiting
8. Add request validation middleware
9. Set up logging and monitoring

## Security Considerations

- Passwords are hashed using bcryptjs
- JWT tokens for authentication
- Input validation on all routes
- CORS enabled for cross-origin requests
- Environment variables for sensitive data
- Admin-only routes protected

## Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications (SendGrid/Nodemailer)
- [ ] Image upload to cloud storage (AWS S3/Cloudinary)
- [ ] Advanced search and filtering
- [ ] Booking availability calendar
- [ ] Reviews and ratings system
- [ ] Analytics dashboard
- [ ] Automated booking confirmations
- [ ] Cancellation and refund policies
- [ ] Multi-language support

## License

Private - The Silent Club Resort
