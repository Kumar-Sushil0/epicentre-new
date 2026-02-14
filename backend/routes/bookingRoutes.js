const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getBooking,
  createBooking,
  updateBooking,
  cancelBooking,
  deleteBooking
} = require('../controllers/bookingController');

router.route('/')
  .get(getAllBookings)
  .post(createBooking);

router.route('/:id')
  .get(getBooking)
  .put(updateBooking)
  .delete(deleteBooking);

router.put('/:id/cancel', cancelBooking);

module.exports = router;
