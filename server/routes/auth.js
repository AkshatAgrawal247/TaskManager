import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { rollNumber, name, email, branch, year, password } = req.body;
    
    const existingUser = await User.findOne({ 
      $or: [{ rollNumber }, { email }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists with this roll number or email' 
      });
    }

    const user = new User({
      rollNumber,
      name,
      email,
      branch,
      year,
      passwordHash: password
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({ token, user: { 
      id: user._id,
      name: user.name,
      rollNumber: user.rollNumber,
      email: user.email
    }});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { rollNumber, password } = req.body;
    
    const user = await User.findOne({ rollNumber });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, user: {
      id: user._id,
      name: user.name,
      rollNumber: user.rollNumber,
      email: user.email
    }});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;