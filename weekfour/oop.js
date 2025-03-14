//object literal
// const person={
// name:"Ayebare",
// age:29,
// greet:function(){
//     console.log(`My name is ${this.name}`)
// }

// }
//new keyword
// const person2= new Object()
// person2.name="Andrew"
// person2.age=40


//constructor function;the function name must start with a capital letter
// function Person(name,age ){
//      this.name=name
//      this.age=age
// }
// Person.prototype.greet =function(){
//     console.log(`Hello my name is ${this.name}  `)
// }
// const person2=new Person("Apio",21)
// console.log(person2)
// person2.greet()
// const person3=new Person("Brian",24)
// console.log(person3)
// person3.greet()
// const person4=new Person("Faimah",27)
// console.log(person4)
// person4.greet()



// class Xperson{
//     constructor (name,age,powers ) 
//     {
//         this.name=name;
//         this.age=age;
//         this.powers=powers;
//     }
//      power(){
//         console.log(`I have ${this.powers}`)
//      }
// }
// const xperson2=new Xperson("Wolverine",50,"claws")
// //console.log(xperson2)
// xperson2.power()
// const xperson3=new Xperson("Deadpool",39, "cancer")
// //console.log(xperson3)
// xperson3.power()
// const xperson4=new Xperson("Storm",28,"wind")
//console.log(xperson4)
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const person2 = new Person("Felicity", 20);
  person2.greet();

  //inheritance 
  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); // Calls the parent constructor
      this.job = job; 
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.job}`);
    }
  }
  
  const emp1 = new Employee("David", 28, "Software Engineer");
  emp1.greet();
  emp1.work();