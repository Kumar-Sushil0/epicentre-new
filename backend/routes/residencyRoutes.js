const express = require('express');
const router = express.Router();
const {
  getAllResidencies,
  getResidency,
  createResidency,
  updateResidency,
  deleteResidency
} = require('../controllers/residencyController');

router.route('/')
  .get(getAllResidencies)
  .post(createResidency);

router.route('/:id')
  .get(getResidency)
  .put(updateResidency)
  .delete(deleteResidency);

module.exports = router;
