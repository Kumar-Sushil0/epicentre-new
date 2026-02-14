const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Room name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    enum: ['private', 'shared', 'tent', 'dark', 'community'],
    required: true
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
    min: 1
  },
  images: [{
    type: String
  }],
  amenities: [{
    type: String
  }],
  availability: {
    type: Boolean,
    default: true
  },
  totalRooms: {
    type: Number,
    required: true,
    default: 1
  },
  features: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);
