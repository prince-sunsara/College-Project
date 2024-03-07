import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DBConnection from './database/db.js'
import Routes from './routes/route.js';
import imageController from './controllers/image-controller.js';
import attendanceController from './controllers/attendance-controller.js';

const app = express();
const port = process.env.PORT || 5000;


app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

app.get('/', (req, res) => {
    res.send('<h1>Prince Sunsara</h1>')
})


/// for live attendance
app.use('/images', imageController); // Use the image controller
app.use('/attendance', attendanceController); // Use the image controller


DBConnection();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});