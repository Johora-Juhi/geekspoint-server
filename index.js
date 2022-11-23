const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


// middleware 
app.use(cors())

const courses = require('./data/coursesName.json')
const courseDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
    res.send('Course API running');
});

app.get('/courses', (req, res) => {
    res.send(courseDetails);
})

app.get('/course', (req, res) => {
    res.send(courseDetails);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courseDetails.find(n => n._id === id);
    res.send(selectCourse);
})
app.listen(port, () => {
    console.log('Newsportal running om this port', port);
})