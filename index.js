const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/coursesName.json')
const courseDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
    res.send('News API running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course', (req, res) => {
    res.send(courseDetails);
})
