import mongoose from 'mongoose';

const PRIORITY_KEYWORDS = {
  'job application': 5,
  'quiz': 4,
  'assignment': 3,
  'project': 3,
  'homework': 2,
  'reading': 1
};

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  priority: {
    type: Number,
    default: 1,
    min: 1,
    max: 5
  },
  dueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isGroupTask: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

taskSchema.pre('save', function(next) {
  if (this.isModified('title') || this.isNew) {
    const titleLower = this.title.toLowerCase();
    let maxPriority = 1;
    
    Object.entries(PRIORITY_KEYWORDS).forEach(([keyword, priority]) => {
      if (titleLower.includes(keyword) && priority > maxPriority) {
        maxPriority = priority;
      }
    });
    
    this.priority = maxPriority;
  }
  next();
});

export default mongoose.model('Task', taskSchema);