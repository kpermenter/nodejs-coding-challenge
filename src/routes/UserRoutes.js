const express = require('express');
const router = express.Router()
const { getUsers } = require('../controllers/GetUsers');
const { createUser } = require('../controllers/CreateUser');
const { updateUser } = require('../controllers/UpdateUser')
const { deleteUser } = require('../controllers/DeleteUser')

// get users
router.get('/users', (req, res) => {
  getUsers(req, res)
});

// create user
router.post('/create/user', (req, res) => {
  createUser(req, res);
})

// update user
router.put('/update/user', (req, res) => {
  updateUser(req, res);
})

// delete user
router.delete('/delete/user/:email', (req, res) => {
  deleteUser(req, res);
})

// 404 for invalid endpoints
router.use('/*', (req, res) => {
  res.status(404).json({
    message: 'invalid route'
  })
})

module.exports = router;