import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';

const router = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadsPath = path.join(__dirname, '..', 'uploads');

// Serve all images in the uploads folder
export function getImages(req, res) {
    fs.readdir(uploadsPath, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading images');
        } else {
            res.send(
                files
                    .filter((file) => path.extname(file) === '.png' || path.extname(file) === '.jpg' || path.extname(file) === '.jpeg')
                    .map((file) => `/uploads/${file}`)
            );
        }
    });
}

export default router;
