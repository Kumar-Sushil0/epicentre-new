const mongoose = require('mongoose');

const diningSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Dining option name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    enum: ['meal-plan', 'beverage', 'special-event'],
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
  images: [{
    type: String
  }],
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'all-day', 'snacks']
  },
  dietaryOptions: [{
    type: String,
    enum: ['vegetarian', 'vegan', 'satvik', 'gluten-free', 'dairy-free']
  }],
  availability: {
    type: Boolean,
    default: true
  },
  servingTimes: [{
    meal: String,
    startTime: String,
    endTime: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Dining', diningSchema);
