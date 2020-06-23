const router = require('express').Router();
const { check } = require('express-validator');

let User = require('../model/user.model');

const userController = require('../controller/user-controller');

router.get('/',userController.getAllUser);

router.post('/signup', userController.signup);

// find product by id
router.get('/:id',userController.getUserById);

// update the product by giving id
router.post('/update/:id', userController.updateUserById);

router.post('/login', userController.login);

module.exports = router;