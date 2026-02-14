# Backend Integration Guide

This document outlines what's needed on the Express backend to integrate with this Next.js frontend.

## Environment Setup

1. Create `.env.local` file in the root directory (copy from `.env.local.example`)
2. Set `NEXT_PUBLIC_API_URL` to your Express server URL (e.g., `http://localhost:5000/api`)

## Required Express Backend Endpoints

### Authentication Endpoints

#### POST /api/auth/signup
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```
**Response:**
```json
{
  "user": {
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "jwt-token-here"
}
```

#### POST /api/auth/login
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "user": {
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "jwt-token-here"
}
```

#### POST /api/auth/send-otp
**Request Body:**
```json
{
  "email": "user@example.com",
  "type": "signup" // or "forgot-password"
}
```
**Response:**
```json
{
  "success": true,
  "message": "OTP sent successfully"
}
```

#### POST /api/auth/verify-otp
**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```
**Response:**
```json
{
  "success": true,
  "message": "OTP verified successfully",
  "token": "jwt-token-here"
}
```

#### POST /api/auth/forgot-password
**Request Body:**
```json
{
  "email": "user@example.com"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Password reset OTP sent to email"
}
```

#### POST /api/auth/reset-password
**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456",
  "newPassword": "newpassword123"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

### Bookings Endpoints

#### POST /api/bookings
**Request Body:**
```json
{
  "roomType": "Private Room",
  "checkIn": "2026-03-01",
  "checkOut": "2026-03-05",
  "guests": 2
}
```

#### GET /api/bookings
**Response:** List of user's bookings

#### GET /api/bookings/:id
**Response:** Single booking details

### User Endpoints

#### GET /api/user/profile
**Response:** User profile data

#### PUT /api/user/profile
**Request Body:** Updated profile data

#### GET /api/user/wishlist
**Response:** User's wishlist items

#### POST /api/user/cart
**Request Body:** Cart items

## CORS Configuration

Your Express backend needs CORS enabled:

```javascript
const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

## Authentication Headers

For protected routes, the frontend will send JWT token in headers:

```javascript
Authorization: Bearer <token>
```

## Frontend Usage

### Making API Calls

```typescript
import { api, endpoints } from '@/utils/api';

// Login
const response = await api.post(endpoints.auth.login, {
  email: 'user@example.com',
  password: 'password123'
});

// Get bookings
const bookings = await api.get(endpoints.bookings.list);

// Send OTP
import { sendOtp } from '@/utils/authApi';
await sendOtp('user@example.com', 'signup');
```

## Enabling Authentication

1. Set `AUTH_ENABLED = true` in `src/app/context/AuthContext.tsx` (line 5)
2. Set `NEXT_PUBLIC_AUTH_ENABLED=true` in `.env.local`
3. Dashboard and protected routes will require login

## Testing

1. Start your Express backend: `npm run dev` (in backend directory)
2. Start Next.js frontend: `npm run dev` (in this directory)
3. Test authentication flow through the UI

## Error Handling

All API errors are caught and thrown with descriptive messages. Handle them in try-catch blocks:

```typescript
try {
  await api.post(endpoints.auth.login, { email, password });
} catch (error) {
  console.error('Login failed:', error.message);
}
```
