let id = 1;
const arrayOfCats = [];

class Cat {
	constructor(name, age){
	this.name = name;
	this.age = age;
	this.id = id++;
	}
	static create(name, age){
	let cat = new Cat(name, age);
	arrayOfCats.push(cat);
	}
	static all(){
		return arrayOfCats;
	}
	static findOne(id){
		for (let i = 0; i < arrayOfCats.length; i++){
			if(id == arrayOfCats[i]['id']){
				return arrayOfCats[i]
			}
		}
	}
	static update(id, updatedCat){
		let ogCat = Cat.findOne(id);
		ogCat['name'] = updatedCat['name'];
		ogCat['age'] = updatedCat['age'];
		console.log(arrayOfCats);
		}
}

Cat.create("gerry", 4)

module.exports = Cat