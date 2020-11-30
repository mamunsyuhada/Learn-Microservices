const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

router.post('/register/:role', usersHandler.register)
router.post('/login', usersHandler.login)
router.put('/update/:id', usersHandler.update)

module.exports = router;
