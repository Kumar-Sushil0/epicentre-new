const express = require('express');
const router = express.Router();
const {
  getAllDining,
  getDining,
  createDining,
  updateDining,
  deleteDining
} = require('../controllers/diningController');

router.route('/')
  .get(getAllDining)
  .post(createDining);

router.route('/:id')
  .get(getDining)
  .put(updateDining)
  .delete(deleteDining);

module.exports = router;
