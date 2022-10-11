class Car {
    constructor(type, name) {
        this.type = type;
        this.name = name
    }
}

let myCar = new Car("mazda", "cx-5");

function Person(name, age) {
    this.name = name;
    this.age = age
}

Person.prototype.nationality = "Indonesia"

// let samuel = new Person("samuel", 23)

// console.log(samuel.nationality);

let nama = "ABCDE"


// String.prototype.reverse = function () {
//     let result = ""
//     for (let i = this.length-1; i >=0; i--) {
//         result = result + this[i]
//     }
//     return result
// }

// console.log(nama.reverse());


// let kelas = "BE KAMPUS MERDEKA"

// console.log(nama.split("").reverse().join(""));

let a = ["samuel", 23, "pu"]

// console.log("football pu samuel 23 soccer");

a = a.filter(item => item != 23)
a.reverse()
a.push(23)
a.push("soccer")
a.unshift("football")

console.log(a.join(" "));

function Pokemon(name, type) {
    this.name = name;
    this.type = type;
}

Pokemon.prototype.categories = "categories";
let myPokemon = new Pokemon("bulbasaur", "friendly");

console.log(myPokemon.categories);