import express from 'express';
import Reminder from '../models/Reminder.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create a reminder
router.post('/', auth, async (req, res) => {
  try {
    const reminder = new Reminder({
      ...req.body,
      userId: req.user.userId
    });
    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all reminders for a user
router.get('/', auth, async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.user.userId })
      .populate('taskId')
      .sort({ reminderTime: 1 });
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a reminder
router.delete('/:id', auth, async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });
    if (!reminder) {
      return res.status(404).json({ message: 'Reminder not found' });
    }
    res.json({ message: 'Reminder deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;