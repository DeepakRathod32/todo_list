const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers');


console.log('router loaded');

router.post('/create_todo', homeController.create);
router.get('/', homeController.home);

module.exports = router;