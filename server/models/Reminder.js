import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  reminderTime: {
    type: Date,
    required: true
  },
  isSent: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Reminder', reminderSchema);