const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Cats = require("./models/cat");

app.use(bodyParser.urlencoded({extended: false}))



app.get("/cats", (req, res) => {
	res.render("index.ejs", {catsList:Cats.all()})
});

app.get("/cats/new", (req, res) => {
	res.render("new.ejs", {})
});

app.post("/cats", (req, res) => {
	Cats.create(req.body.name, req.body.age);
	res.redirect("/cats");
})

app.get("/cats/:id", (req, res) => {
	res.render("show.ejs", {cat:Cats.findOne(req.params.id)})
});

app.get("/cats/:id/edit", (req, res) => {
	res.render("edit.ejs", {cat:Cats.findOne(req.params.id)})
})
app.post("/cats/:id", (req, res) => {
	Cats.update(req.body.id, req.body);
	res.redirect("/cats/:id");
})

app.listen(3000, () => {

	console.log("Listening on port 3000!")
});



