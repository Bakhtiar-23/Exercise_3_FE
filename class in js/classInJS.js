class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    sayGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating two objects of the Person class
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Displaying person information
const personInfoDiv = document.getElementById("personInfo");
personInfoDiv.innerHTML = `
    <p class="personName">Name of person 1: ${person1.getName()}</p>
    <p class="personAge">Age of person 2: ${person2.getAge()}</p>
    <p class="personGreeting">Greeting from person 1: ${person1.sayGreeting()}</p>
`;
