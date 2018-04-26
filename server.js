const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
console.log('Server is running');

app.get('/api/about', (req, res) => {
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
});


// use mysql and connect to db
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'blogposts'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Yay! Connected!");
});

