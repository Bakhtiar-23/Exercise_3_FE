class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`%cHello, my name is ${this.name} and I'm ${this.age} years old.`, 'color: orange');
    }
}

class SuperHero extends Person {
    constructor(name, age, superpower) {
        super(name, age); (Person)
        this.superpower = superpower;
    }

    useSuperPower() {
        console.log(`%cUsing superpower: ${this.superpower}`, 'color: green');
    }
}

// call the methodes
const hero1 = new SuperHero('Superman', 30, 'Flight');
const hero2 = new SuperHero('Spiderman', 25, 'Web-slinging');

hero1.greet(); 
hero1.useSuperPower(); 

hero2.greet(); 
hero2.useSuperPower(); 