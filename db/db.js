const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cats")
mongoose.connection.on("connected", () => {
	console.log("GOOD JOB");
});
mongoose.connection.on("error", (err) => {
	console.log("you done messed up");
});
mongoose.connection.on("disconnected", () => {
	console.log("lost in space");
});