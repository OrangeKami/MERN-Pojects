import express from 'express';
const router = express.Router();
//  controller functions
import { loginUser, signupUser } from '../controllers/userController.js';

//  login 
router.post('/login', loginUser)
// sinup
router.post('/signup', signupUser)



export default router;