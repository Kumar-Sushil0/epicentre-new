const Dining = require('../models/Dining');

// @desc    Get all dining options
// @route   GET /api/dining
exports.getAllDining = async (req, res) => {
  try {
    const { category, mealType, available } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (mealType) query.mealType = mealType;
    if (available) query.availability = available === 'true';

    const dining = await Dining.find(query).sort({ price: 1 });
    
    res.status(200).json({
      success: true,
      count: dining.length,
      data: dining
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get single dining option
// @route   GET /api/dining/:id
exports.getDining = async (req, res) => {
  try {
    const dining = await Dining.findById(req.params.id);
    
    if (!dining) {
      return res.status(404).json({
        success: false,
        message: 'Dining option not found'
      });
    }

    res.status(200).json({
      success: true,
      data: dining
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Create new dining option
// @route   POST /api/dining
exports.createDining = async (req, res) => {
  try {
    const dining = await Dining.create(req.body);
    
    res.status(201).json({
      success: true,
      data: dining
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create dining option',
      error: error.message
    });
  }
};

// @desc    Update dining option
// @route   PUT /api/dining/:id
exports.updateDining = async (req, res) => {
  try {
    const dining = await Dining.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!dining) {
      return res.status(404).json({
        success: false,
        message: 'Dining option not found'
      });
    }

    res.status(200).json({
      success: true,
      data: dining
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update dining option',
      error: error.message
    });
  }
};

// @desc    Delete dining option
// @route   DELETE /api/dining/:id
exports.deleteDining = async (req, res) => {
  try {
    const dining = await Dining.findByIdAndDelete(req.params.id);

    if (!dining) {
      return res.status(404).json({
        success: false,
        message: 'Dining option not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Dining option deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};
