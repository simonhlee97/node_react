const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
console.log('Server is running');


app.get('/', function(req, res){
	res.send('hello Simon React App');
});

app.get('/api/example', (req, res) => {
	const example = [
		{id: 1, name: 'Bill', weight: '180'},
		{id: 2, name: 'Joe', weight: '160'},
		{id: 3, name: 'Sean', weight: '170'},
		{id: 4, name: 'Ty', weight: '190'}
	];
	res.json(example);
})

