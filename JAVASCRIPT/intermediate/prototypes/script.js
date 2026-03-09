function Person(name) {
    this.name  = name;
}

const person1 = new Person("devam");

Person.prototype.sayhello = function(){
  return `Hello, my name is ${this.name}!`;
};

console.log(person1.sayhello());
