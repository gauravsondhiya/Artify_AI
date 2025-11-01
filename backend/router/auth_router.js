import express from 'express'
import login_controller from '../controller/login_controller.js'
import Signup from '../controller/Signup_controller.js'
const router = express.Router()

router.post("/signup",Signup)
router.post("/login",login_controller)

export default router