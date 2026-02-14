const Residency = require('../models/Residency');

// @desc    Get all residencies
// @route   GET /api/residencies
exports.getAllResidencies = async (req, res) => {
  try {
    const { category, available } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (available) query.availability = available === 'true';

    const residencies = await Residency.find(query).sort({ price: 1 });
    
    res.status(200).json({
      success: true,
      count: residencies.length,
      data: residencies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get single residency
// @route   GET /api/residencies/:id
exports.getResidency = async (req, res) => {
  try {
    const residency = await Residency.findById(req.params.id);
    
    if (!residency) {
      return res.status(404).json({
        success: false,
        message: 'Residency not found'
      });
    }

    res.status(200).json({
      success: true,
      data: residency
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Create new residency
// @route   POST /api/residencies
exports.createResidency = async (req, res) => {
  try {
    const residency = await Residency.create(req.body);
    
    res.status(201).json({
      success: true,
      data: residency
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create residency',
      error: error.message
    });
  }
};

// @desc    Update residency
// @route   PUT /api/residencies/:id
exports.updateResidency = async (req, res) => {
  try {
    const residency = await Residency.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!residency) {
      return res.status(404).json({
        success: false,
        message: 'Residency not found'
      });
    }

    res.status(200).json({
      success: true,
      data: residency
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update residency',
      error: error.message
    });
  }
};

// @desc    Delete residency
// @route   DELETE /api/residencies/:id
exports.deleteResidency = async (req, res) => {
  try {
    const residency = await Residency.findByIdAndDelete(req.params.id);

    if (!residency) {
      return res.status(404).json({
        success: false,
        message: 'Residency not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Residency deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};
