//Criação de objetos usando método construtor definido pelo programador:

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("Adilson", "Ferreira", 70, "brown");
const myWife = new Person("Denise", "Carvalho", 38, "brown");
const myMother = new Person("Nilza", "Loureiro", 68, "brown");
const mySister = new Person("Mariana", "Montini", 39, "brown");
const myDaughter = new Person("Fernanda", "Ferreira", 13, "blue");

const mySelf = new Person("André", "L. M. Ferreira", 43, "blue");

document.getElementById("dados").innerHTML = "My father is " + myFather.age + ". My mother is " + myMother.age + ".";