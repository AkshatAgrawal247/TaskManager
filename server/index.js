//npm run server
//npm run dev
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; // <-- Import path
import { fileURLToPath } from 'url'; // <-- Import url helper

import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import reminderRoutes from './routes/reminders.js';

// --- Add these lines ---
const __filename = fileURLToPath(import.meta.url); // Get full path to current file
const __dirname = path.dirname(__filename);      // Get directory of current file
dotenv.config({ path: path.resolve(__dirname, '.env') }); // Load .env from the server directory
// --- End of added lines ---

const app = express();

app.use(cors());
app.use(express.json());

// --- Add this for debugging ---
console.log(`Attempting to connect to MongoDB with URI: ${process.env.MONGODB_URI ? 'found' : 'NOT FOUND'}`);
if (!process.env.MONGODB_URI) {
    console.error("FATAL ERROR: MONGODB_URI is undefined. Check server/.env file and dotenv configuration in server/index.js");
    process.exit(1); // Stop the server if URI is missing
}
// --- End of debug log ---

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/reminders', reminderRoutes);

// Use the PORT from .env, otherwise default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});