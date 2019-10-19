const express = require('express'); //import MVC framework
var fs = require('fs');

const app = express();

const port = process.env.PORT | 8080;

/* HTTP Server */
app.listen(port, (err) => {
	if(err)
		throw err;

	console.log('Server is up and running on port %s', port);
});

/* http://localhost:8080 */
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/login.html');
});

/* http://localhost:8080/login */
app.post('/login', (req, res) => {
	res.json({ "message": "Login Success!", "status": 200});
});

app.get('/users', (req, res) => {
	res.json(['Hulk', 'Captain America', 'Iron Man', 'Hogguy']);
});

app.get('/products', (req, res) => {

	fs.readFile('./products.json', (err, data) => {
		if(err)
			console.log("Error while reading json file");

		res.json(JSON.parse(data));
	});

})

