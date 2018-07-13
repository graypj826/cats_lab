const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const catController = require('./controllers/catsController');
require("./db/db")

const methodOverride = require('method-override');



app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use('/cats', catController);


app.listen(3000, () => {
	console.log("Listening on port 3000!")
});


