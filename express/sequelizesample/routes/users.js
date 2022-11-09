const express = require('express');
const router = express.Router();
const UserController = require('../controller/user')


/* GET users listing. */
router.get('/', UserController.getAll);
router.post('/', UserController.addUser);

module.exports = router;
