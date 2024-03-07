
import express from 'express';
import { spawn } from 'child_process';

const router = express.Router();

router.get('/liveRecord', (req, res) => {
    const pythonProcess = spawn('python', ['live_attendance.py']);

    pythonProcess.stdout.on('data', (data) => {
        console.log("data : ", data);
        console.log(`Python Script Output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.log("Error while recording attendance", data);
        console.error(`Error in Python Script: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python Script Exited with code: ${code}`);
    });

    res.send('Attendance recording started.');
});


router.post('/recordAttendance', (req, res) => {
    console.log("recording attendance", req.body);

    // Add logic here to handle attendance recording based on the received payload
    res.status(200).send('Attendance recorded successfully.'); // Sending a response for the POST request
});

export default router;