const mongoose = require('mongoose');
const db = mongoose.connection;

const CatStats = require('./models/schema');

mongoose.connect('mongodb://localhost:27017/cats', { useNewUrlParser: true });

db.on('error', (err) => {
	console.log(err, ' this is the error message');
});

db.on('connnected', () => {
	console.log('cat_server is connected to mongodb');
});

CatStats.find({}), (err, response) => {
	console.log('we are finding mongo');
	console.log(err);
};
// CatStats.create({
// 	name: 'John',
// 	age: 5,
// }, (err, response) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(response);
// 	}
// });

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Cats = require("./models/cat");
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.get("/cats", (req, res) => {
	res.render("index.ejs", {catsList:Cats.all()})
});

app.get("/cats/new", (req, res) => {
	res.render("new.ejs", {})
});

app.post("/cats", (req, res) => {
	Cats.create(req.body);
	res.redirect("/cats");
})

app.get("/cats/:id", (req, res) => {
	res.render("show.ejs", {cat:Cats.findOne(req.params.id)})
});

app.get("/cats/:id/edit", (req, res) => {
	res.render("edit.ejs", {cat:Cats.findOne(req.params.id)})
})
app.post("/cats/:id", (req, res) => {
	Cats.update(req.params.id, req.body);
	res.redirect("/cats/" + req.params.id);
})
app.delete("/cats/:id", (req, res) => {
	Cats.delete(req.params.id);
	res.redirect("/cats");
})


app.listen(3000, () => {

	console.log("Listening on port 3000!")
});


