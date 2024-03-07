import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import { spawn } from 'child_process';

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


router.get('/recordAttendance', (req, res) => {
    console.log(req.body)
    const pythonProcess = spawn('python', ['live_attendance.py']);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python Script Output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.log(data);
        console.error(`Error in Python Script: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python Script Exited with code: ${code}`);
    });

    res.send('Attendance recording started.');
});



router.post('/recordAttendance', (req, res) => {
    console.log(req.body);
    const { students } = req.body;

    if (Array.isArray(students) && students.length > 0) {
        recordedAttendance.push(...students);
        console.log('Attendance recorded:', students);
        res.status(200).json({ message: 'Attendance recorded successfully' });
    } else {
        res.status(400).json({ error: 'Invalid request payload' });
    }
})


export default router;
