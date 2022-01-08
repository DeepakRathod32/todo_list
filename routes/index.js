const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers'); // to take a file from specified folder to get access of controllers


console.log('router loaded');
// this takes a user to todo create controller
router.post('/create_todo', homeController.create);
// this takes a user to todo delete controller
router.post('/delete_todo', homeController.delete);

// this takes a user to todo home controller
router.get('/', homeController.home);



module.exports = router;  // to use router in other file