const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router()
app.use(cors());

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
console.log('Server is running');

// app.get('/api/about', (req, res) => {
// 	res.send('hello Simon React App');
// });

// app.get('/api/example', (req, res) => {
// 	const example = [
// 		{id: 1, name: 'Bill', weight: '180'},
// 		{id: 2, name: 'Joe', weight: '160'},
// 		{id: 3, name: 'Sean', weight: '170'},
// 		{id: 4, name: 'Ty', weight: '190'}
// 	];
// 	res.json(example);
// });

// use mysql and connect to db
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'sendgrid'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Yay! Connected!");
});

// Submit a New Post
app.get('/posts/add', (req, res) => {
	const { title, post } = req.query;
	const INSERTPOSTQUERY = `INSERT INTO posts (title, post) VALUES ('${title}', '${post}')`;
	
	con.query(INSERTPOSTQUERY, (err, results) => {
		if(err) {
			return res.send(err)
		} else {
			return res.send('Post has been added')
		}
	})
	
})

// READ_ALL Show All posts
app.get('/posts', (req, res) => {
	con.query('SELECT * FROM posts', (err, results) => {
		if(err) {
			return res.send(err)
		} else {
			return res.json({
				data: results
			})
		}
	})
});



// READ-ONE post when user clicks on "read more..." 
app.get('/post/:id', (req, res) => {

	let query = "SELECT * FROM posts WHERE id=?";

	// let table = ["post", req.params.id];
	// query = mysql.format(query,table);
	
	con.query(query, (err, rows) => {
		if(err) {
			res.json(
				{
					"Error": true, 
					"Message" : "Error executing MySQL query"
				}
			);
		} else {
			return res.json(
				{
					"Error" : false, 
					"Message" : "Success", 
					"Post Content" : rows
				}
			);
		}
	})
});
// router.get('/:id', (req, res) => {

// 	User.findById(req.params.id)
// 	  .then((result) => {
// 		res.json(result);
// 	  })
// 	  .catch((err) => {
// 		res.status(404).json({ success: false, msg: `No such user.` });
// 	  });
//   });
router.get('/test/:id', function(req, res, next) {
	res.render('test', {output: req.params.id});
});

module.exports = router;
