const express = require('express');
const { register,login, addf } = require('../controllers/user');
const router = express.Router();


router.post("/user",register)
router.post("/login",login)
router.put("/user/:username")
router.post("/user/friend",addf)
router.get("/friend/:username")
module.exports=router