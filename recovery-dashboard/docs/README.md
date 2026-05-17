# Recovery Tracker Dashboard

## Project Description

Recovery Tracker Dashboard is a full stack web application designed for student athletes to monitor and visualize recovery patterns over time. The system allows users to submit daily recovery logs including sleep, soreness, stress, hydration, energy levels, and personal notes.

The application stores data in a Supabase cloud database and visualizes recovery trends using interactive charts. The project also includes email validation functionality and backend API integration through an Express.js server.

---

## Target Browsers

This application is optimized for contemporary desktop browsers including:

- Google Chrome
- Safari
- Microsoft Edge
- Mozilla Firefox

The application was primarily developed and tested on macOS using Chrome and Safari.

---

## Live Application

Vercel Deployment Link:

https://inst-377-final-project-henna.vercel.app

GitHub Repository:

https://github.com/danielaburgos23/INST377_FinalProject/tree/main/recovery-dashboard

---

## Developer Manual

[View the Developer Manual](./docs/README.md)

---

# Developer Manual

## Overview

The Recovery Tracker Dashboard is a full stack application using:

- React + Vite frontend
- Express.js backend server
- Supabase cloud database
- Chart.js for data visualization
- MailboxLayer API for email validation
- Vercel deployment

The application allows users to:
- Submit recovery logs
- Store recovery data in Supabase
- Visualize trends using charts
- Validate emails for future weekly summaries

---

# Project Structure

```bash
recovery-dashboard/
│
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── DashboardCharts.jsx
│   │   │   ├── EmailValidation.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── RecoveryForm.jsx
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── server/                  # Backend Express server
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── README.md
│
├── docs/
│   └── README.md
│
└── README.md
```

---

# Installation Instructions

## 1. Clone Repository

```bash
git clone https://github.com/danielaburgos23/INST377_FinalProject.git
```

---

## 2. Install Frontend Dependencies

```bash
cd recovery-dashboard/client
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 4. Create Environment Variables

Inside the `server` folder, create a `.env` file with:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
MAILBOXLAYER_API_KEY=your_api_key
```

---

# Running the Application

## Start Backend Server

Inside `/server`:

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:3000
```

---

## Start Frontend

Inside `/client`:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## GET `/recovery-logs`

Retrieves all recovery log entries from Supabase.

Example:

```bash
http://localhost:3000/recovery-logs
```

---

## POST `/recovery-logs`

Creates a new recovery log entry in Supabase.

Example Request Body:

```json
{
  "date": "2026-05-17",
  "sleep_hours": 8,
  "soreness_level": 2,
  "stress_level": 3,
  "energy_level": 4,
  "hydration_level": 5,
  "notes": "Light practice and recovery session."
}
```

---

## GET `/validate-email`

Validates emails using the MailboxLayer API.

Example:

```bash
http://localhost:3000/validate-email?email=test@gmail.com
```

---

# Frontend Libraries Used

The project uses the following frontend JavaScript libraries:

1. Chart.js
2. React Chartjs 2

---

# Testing

No formal automated testing framework was implemented for this project.

Testing was completed manually through:
- Frontend form submissions
- API endpoint testing
- Supabase database verification
- Email validation testing
- Vercel deployment testing

---

# Known Issues

- The deployed Vercel frontend may require the backend server to be running locally for full API functionality.
- Email validation depends on external API availability.
- Mobile responsiveness could be improved further for smaller devices.

---

# Future Development Roadmap

Potential future improvements include:

- User authentication system
- Athlete account management
- Coach dashboards
- Weekly email summary automation
- Improved mobile responsiveness
- Advanced analytics and trend predictions
- Recovery scoring system
- Calendar integrations

---

# Contributors

- Daniela Burgos Ortega