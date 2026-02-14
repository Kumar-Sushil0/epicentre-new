const mongoose = require('mongoose');

const residencySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Residency title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  images: [{
    type: String
  }],
  duration: {
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      enum: ['days', 'weeks', 'months'],
      default: 'days'
    }
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  priceDisplay: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    default: 1
  },
  inclusions: [{
    type: String
  }],
  schedule: {
    type: String
  },
  practitioner: {
    name: String,
    bio: String,
    image: String
  },
  availability: {
    type: Boolean,
    default: true
  },
  startDates: [{
    type: Date
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Residency', residencySchema);
