const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catsSchema = new Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true},
});

const CatStats = mongoose.model('CatStats', catsSchema);
module.exports = CatStats;