"use strict"

const calculateBmi = function() {
    this.bmi = this.mass / (this.height ** 2)
    return this.bmi
}

const determineHighestBmi = function(persons) {
    let maxPerson = undefined
    let maxBmi = 0
    persons.forEach(person => {
        if (person.calculateBmi() > maxBmi) {
            maxPerson = person
            maxBmi = person.bmi
        }
    })
    return maxPerson
}

let victor = {
    fullName: "Victor Rivera",
    mass: 60,
    height: 1.7
}

let john = {
    fullName: "John Young",
    mass: 65,
    height: 1.75
}

victor.calculateBmi = calculateBmi
john.calculateBmi = calculateBmi

let highestBmi = determineHighestBmi([victor, john])
console.log("Highest BMI is " + highestBmi.fullName + " with a BMI of " + highestBmi.bmi)
