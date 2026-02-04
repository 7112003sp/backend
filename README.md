# Smart Reconciliation System (Backend)

This project is a backend API for a Smart Reconciliation System.
It allows uploading transaction CSV files, storing records in MongoDB, and updating reconciliation status with audit tracking.

---

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Features
- Upload CSV transaction records
- Store records in database
- Fetch all records
- Update record status (Matched / Unmatched)
- Audit log created on every update

---

## Setup Instructions

### 1. Clone repository
git clone https://github.com/7112003sp/backend.git
cd backend

### 2. Install dependencies
npm install

### 3. Create .env file
Create `.env` in root folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

### 4. Run server
node server.js

Server runs on:
http://localhost:5000

---

## API Endpoints

### Get all records
GET /api/records

### Upload CSV
POST /api/upload
Form-data → file

### Update record
PUT /api/records/:id

---

## Notes
- MongoDB Atlas is used as database
- Environment variables are not included in repository for security
- Frontend connects using REST API
