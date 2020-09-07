let outputElement = document.getElementById("output")

let triangleString = ""
let pyramidString = ""
let diamondString = ""

let length = 10

let i = 0
do {
    triangleString += "*".repeat(i+1)
    triangleString += "<br>"

    pyramidString += "&nbsp;".repeat(length - 1 - i) + "*".repeat(2*i+1)
    pyramidString += "<br>"

    i++
} while (i < length)

diamondString = pyramidString
for (i = length-1 ; i > 0 ; i--) {
    diamondString += "&nbsp;".repeat(length - i) + "*".repeat(2*i-1)
    diamondString += "<br>" 
}


outputElement.innerHTML = triangleString + "<br><br>" + pyramidString + "<br><br>" + diamondString