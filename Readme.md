# Thapar Task Manager

Thapar Task Manager is a full-stack task management system designed to help users efficiently manage their tasks, set reminders, and prioritize work smartly. It features user authentication, task creation and management, reminders, and intelligent task prioritization based on important keywords.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **User Authentication** — Secure registration and login using JWT tokens.
- **Task Management** — Create, view, update, and delete tasks.
- **Reminders** — Set due dates and receive reminders for important tasks.
- **Task Prioritization** — Automatically prioritize tasks based on keywords like "quiz", "assignment", etc.
- **Responsive UI** — Built with React and Tailwind CSS for a seamless experience across devices.
- **Protected Routes** — Only authenticated users can access certain pages.

---

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

### Development Tools
- Vite
- TypeScript
- ESLint
- PostCSS

---

## Project Structure

```bash
taskmgmt/
├── server/                  # Backend code
│   ├── .env                 # Environment variables
│   ├── index.js             # Main server file
│   ├── middleware/          # Middleware (e.g., auth)
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
├── src/                     # Frontend code
│   ├── components/          # React components
│   ├── context/             # Context API for authentication
│   ├── App.tsx              # Main React app
│   ├── main.tsx             # Entry point
│   ├── index.css            # Tailwind CSS styles
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (Local setup or MongoDB Atlas)

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/thapar-task-manager.git
   cd thapar-task-manager
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file inside the `server/` directory and add the following:
   ```env
   MONGODB_URI=mongodb://localhost:27017/task-manager
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

4. **Start the Backend Server:**
   ```bash
   npm run server
   ```

5. **Start the Frontend Development Server:**
   ```bash
   npm run dev
   ```

6. **Access the Application:**
   Open your browser and visit: [http://localhost:5173](http://localhost:5173)

---

## Environment Variables

| Variable       | Description                         | Example                                  |
|----------------|-------------------------------------|------------------------------------------|
| `MONGODB_URI`  | MongoDB connection string           | `mongodb://localhost:27017/task-manager` |
| `JWT_SECRET`   | Secret key for JWT authentication   | `your-secret-key`                        |
| `PORT`         | Backend server port                 | `5000`                                   |

---

## Available Scripts

| Command             | Description                                 |
|---------------------|---------------------------------------------|
| `npm run dev`        | Starts the frontend development server (Vite) |
| `npm run build`      | Builds the frontend for production         |
| `npm run preview`    | Previews the production build              |
| `npm run server`     | Starts the backend server                  |
| `npm run lint`       | Runs ESLint to check for code issues       |

---

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` — Register a new user.
- `POST /login` — Log in an existing user.

### Tasks (`/api/tasks`)
- `GET /` — Get all tasks for the authenticated user.
- `POST /` — Create a new task.
- `PUT /:id` — Update a task by ID.
- `DELETE /:id` — Delete a task by ID.

### Reminders (`/api/reminders`)
- `POST /` — Create a new reminder.
- `GET /` — Get all reminders for the authenticated user.
- `DELETE /:id` — Delete a reminder by ID.

---

## Screenshots

**Login Page**

![Login Page](![alt text](image-1.png))

**Dashboard**

![Dashboard](![alt text](image.png))

---

 

## Author

Made with ❤️ by Akshat(https://github.com/your-username)

