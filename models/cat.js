let id = 1;
const arrayOfCats = [];

class Cat {
	constructor(data){
	this.name = data['name'];
	this.age = data['age'];
	this.id = id++;
	}
	static create(data){
	let cat = new Cat(data);
	arrayOfCats.push(cat);
	console.log(arrayOfCats);
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

Cat.create({name: "jim", age: 4});

module.exports = Cat

