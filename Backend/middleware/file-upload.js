import multer from 'multer';
import path from 'path';

/// for image store
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const name = req.body.name;
        cb(null, name.replace(/\s/g, '') + path.extname(file.originalname));
    },
});
export const upload = multer({ storage: storage });