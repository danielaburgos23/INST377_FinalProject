# Recovery Tracker Dashboard

## Project Description

Recovery Tracker Dashboard is a full stack web application designed for student athletes to monitor and visualize recovery patterns over time. The system allows users to submit daily recovery logs including sleep, soreness, stress, hydration, energy levels, and personal notes. The application stores data in a Supabase cloud database and visualizes recovery trends using interactive charts.

The project was developed as part of the INST377 Final Project and demonstrates full stack web development concepts including React frontend development, Express backend APIs, database integration, external API usage, and cloud deployment.

Core features include:
- Recovery log submission form
- Dynamic recovery dashboard visualizations
- Sleep, stress, and energy tracking
- Supabase cloud database integration
- Email validation using the Mailboxlayer API
- Responsive athlete focused interface
- REST API backend architecture

---

## Target Browsers

The application is designed primarily for modern desktop and mobile browsers.

### Desktop Browsers
- Google Chrome
- Safari
- Microsoft Edge
- Mozilla Firefox

### Mobile Browsers
- Safari on iOS
- Chrome on Android

The application was mainly tested using:
- Google Chrome on macOS
- Safari on macOS

---

## Live Deployment

Frontend deployed using Vercel:

https://inst-377-final-project-henna.vercel.app

---

## GitHub Repository

GitHub Repository Link:

https://github.com/danielaburgos23/INST377_FinalProject

---

## Developer Manual

See Developer Manual below.

---

# Developer Manual

## Introduction

This document is intended for future developers who may continue development of the Recovery Tracker Dashboard project.

The application follows a full stack architecture using:
- React + Vite frontend
- Express.js backend
- Supabase PostgreSQL database
- Recharts for data visualization
- Mailboxlayer external API for email validation

---

# Project Structure

```text
INST377_FinalProject/
│
├── recovery-dashboard/
│   ├── client/        → React frontend
│   ├── server/        → Express backend
│
├── docs/              → Project documentation
```

---

# Technologies Used

## Frontend
- React
- Vite
- Axios
- Recharts
- CSS

## Backend
- Node.js
- Express.js
- CORS
- dotenv
- Axios

## Database
- Supabase PostgreSQL

## Deployment
- Vercel

---

# Installation Instructions

## 1. Clone Repository

```bash
git clone https://github.com/danielaburgos23/INST377_FinalProject.git
```

---

## 2. Install Frontend Dependencies

Navigate into the client folder:

```bash
cd recovery-dashboard/client
npm install
```

Dependencies include:
- React
- Axios
- Recharts
- React Router DOM

---

## 3. Install Backend Dependencies

Navigate into the server folder:

```bash
cd ../server
npm install
```

Dependencies include:
- Express
- CORS
- dotenv
- Axios
- Supabase client
- Nodemon

---

# Environment Variables

Create a `.env` file inside the server folder.

Required variables:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
MAILBOXLAYER_KEY=your_mailboxlayer_api_key
```

---

# Running the Application

## Run Backend Server

Inside:

```bash
cd recovery-dashboard/server
```

Run:

```bash
npm run dev
```

Expected output:

```text
Server running on port 3000
```

---

## Run Frontend Client

Inside:

```bash
cd recovery-dashboard/client
```

Run:

```bash
npm run dev
```

Expected local URL:

```text
http://localhost:5173
```

---

# API Endpoints

## GET `/recovery-logs`

Returns all recovery logs from the database.

### Example

```http
GET /recovery-logs
```

### Response

```json
[
  {
    "date": "2026-05-12",
    "sleep_hours": 8,
    "stress_level": 4
  }
]
```

---

## POST `/recovery-logs`

Creates a new recovery log entry.

### Example

```http
POST /recovery-logs
```

### Request Body

```json
{
  "date": "2026-05-12",
  "sleep_hours": 8,
  "soreness_level": 1,
  "stress_level": 4,
  "energy_level": 3,
  "hydration_level": 3,
  "notes": "Practice and study hours."
}
```

---

## GET `/validate-email`

Validates email addresses using the Mailboxlayer API.

### Example

```http
GET /validate-email?email=test@gmail.com
```

### Response

```json
{
  "valid": true
}
```

---

# Database Information

The project uses a Supabase PostgreSQL database.

Primary table:
- `recovery_logs`

Columns include:
- date
- sleep_hours
- soreness_level
- stress_level
- energy_level
- hydration_level
- notes

---

# Testing

At the current stage, testing was performed manually through:
- frontend form submissions
- API endpoint browser testing
- Supabase table verification
- email validation testing

Future development should include:
- Jest unit testing
- API integration tests
- frontend component testing

---

# Known Bugs

## Current Known Issues

- Deployed frontend still references local backend routes
- Backend server is currently intended for local execution
- Some charts may not refresh automatically without page reload
- Limited form validation beyond required fields

---

# Future Development Roadmap

## Planned Improvements

### Backend Deployment
Deploy Express backend using:
- Railway
- Render
- or Vercel serverless functions

### Authentication
Add athlete login accounts using Supabase Authentication.

### Dashboard Improvements
- real time chart updates
- filtering by date ranges
- athlete comparison views

### Coach Features
- team dashboards
- athlete monitoring
- performance alerts

### Mobile Optimization
Improve responsive behavior for smaller devices.

### Notifications
Add automated weekly recovery summary emails.

---

# Additional Notes

This project was developed for educational purposes as part of INST377 at the University of Maryland.

The project demonstrates:
- frontend development
- backend API design
- cloud database integration
- deployment workflows
- full stack application architecture