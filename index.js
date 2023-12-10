// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says meow!`
        console.log(`${this.name} says meow!`)
    }
}
let cat = new Cat("Sasha", "female")

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says woof!`
        console.log(`${this.name} says woof!`)
    }
}
let red = new Dog("Red", "male")

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak(sex) {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
}
}
let bird = new Bird("juneau", "male")
let bird2 = new Bird("dov", "female")