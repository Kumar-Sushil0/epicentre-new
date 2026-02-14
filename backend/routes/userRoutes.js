const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserProfile,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.route('/')
  .get(getAllUsers);

router.route('/:id')
  .get(getUserProfile)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
