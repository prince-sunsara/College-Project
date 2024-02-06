import express from 'express';
import multer from 'multer';
import path from 'path';
import { createUser, loginUser } from '../controllers/user-controller.js';

const router = express.Router();

/// for image store
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });


/// users routes
router.post('/createUser', upload.single('file'), createUser);
router.post('/loginUser', loginUser);


export default router;