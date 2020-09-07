
const checkFactors = function(number, factorArray) {
    for (i in factorArray) {
        if(number%factorArray[i] != 0) return false
    }
    return true
}

let number = prompt("Enter a number")

if (isNaN(number)) {
    alert("Not a number")
} else {
    switch (true) {
        case checkFactors(number, [5, 3]):
            alert("Eureka!")
            break
        case checkFactors(number, [5]):
            alert("Number is divisible by 5")
            break
        case checkFactors(number, [3]):
            alert("Number is divisible by 3")
            break
        default:
            break
    }
}

