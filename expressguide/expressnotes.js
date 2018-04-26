const Joi = require('joi'); // Joi makes validation very easy
const express = require('express');
const app = express();

var things = require('./things.js');
//both index.js and things.js should be in same directory
app.use('/things', things);

var about = require('./about')
app.use('/about', about)

app.use(express.json());

const courses = [
	{id: 1, name: 'course1'},
	{id: 2, name: 'course2'},
	{id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello this is the home route');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('That ID does not exist');   // 404
	res.send(course);
});

app.post('/api/courses', (req, res) => {

	const {error} = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The given ID does not exist');   // 404
	
	const {error} = validateCourse(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Update the course
	course.name = req.body.name;
	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(4).required()
	};

	const result = Joi.validate(course, schema);
}

app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The given ID does not exist');

	const index = courses.indexOf(course);
	courses.splice(index, 1);

	res.send(course);

})

// PORT environment variable
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on Port ${port}`));