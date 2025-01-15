const express = require ('express');
const authController = require('../controller/authController');
const router = express.Router();


router.get('/test', (req, res)=>res.json({msg: "Working  succesfully"}))
router.post('/register', authController.register)
router.get('/login' , authController.login)

module.exports = router;