import express from 'express';
import { createUser, loginUser, getUser } from '../controllers/user-controller.js';
import { upload } from '../middleware/file-upload.js';
import fetchUser from '../middleware/fetch-user.js';

const router = express.Router();




/// users routes
router.post('/createUser', upload.single('file'), createUser);
router.post('/loginUser', loginUser);
router.get('/getUser', fetchUser, getUser);


export default router;