const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Activity title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    enum: ['experience', 'wellness', 'solitude', 'expression'],
    required: true
  },
  subCategory: {
    type: String
  },
  icon: {
    type: String
  },
  images: [{
    type: String
  }],
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  priceDisplay: {
    type: String,
    required: true
  },
  duration: {
    value: Number,
    unit: {
      type: String,
      enum: ['minutes', 'hours', 'days']
    }
  },
  capacity: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      required: true
    }
  },
  userCount: {
    type: String
  },
  availability: {
    type: Boolean,
    default: true
  },
  schedule: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  requirements: [{
    type: String
  }],
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'challenging']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);
