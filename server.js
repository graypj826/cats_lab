const express = require("express");
const app = express();

const Cats = require("./models/cat");




app.get("/cats", (req, res) => {
	res.render("index.ejs", {catsList:Cats.all()})
});


app.get("/cats/:id", (req, res) => {
	res.render("show.ejs", {cat:Cats.findOne(req.params.id)})
});


app.get("/cats/new", (req, res) => {
	res.render("new.ejs", {})
});

























app.listen(3000, () => {

	console.log("Listening on port 3000!")
});



