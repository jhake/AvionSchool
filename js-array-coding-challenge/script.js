"use strict"

let johnObject = {
    billValues: [],
    calculateTips: function() {
        let tips = this.billValues.map(billValue => {
            if (billValue < 500) {
                return billValue*0.20
            } else if (billValue >= 500 && billValue < 2000) {
                return billValue*0.15
            } else {
                return billValue*0.10
            }
        })
    
        let totalBills = this.billValues.map( (billValue, index) => {
            return billValue + tips[index]
        })
        
        return {tips: tips, totalBills: totalBills}
    }
}

let victorObject = {
    billValues: [],
    calculateTips: function() {
        let tips = this.billValues.map(billValue => {
            if (billValue < 1000) {
                return billValue*0.20
            } else if (billValue >= 1000 && billValue < 3000) {
                return billValue*0.10
            } else {
                return billValue*0.25
            }
        })
    
        let totalBills = this.billValues.map( (billValue, index) => {
            return billValue + tips[index]
        })
        
        return {tips: tips, totalBills: totalBills}
    }
}

const calculateTipAverage = function(tips) {
    let sum = 0
    tips.forEach( tip => {
        sum += tip
    })
    return sum / tips.length
}

let outputElement = document.getElementById("output")

document.getElementById("calculate").onclick = () => {
    johnObject.billValues = []
    victorObject.billValues = []
    document.getElementById("billValues").value.split(",").forEach( billValue => {
        johnObject.billValues.push(Number(billValue))
        victorObject.billValues.push(Number(billValue))
    })

    let outputString = ""
    let johnResult = johnObject.calculateTips()
    let victorResult = victorObject.calculateTips()

    outputString += "<h2>John</h2>"
    outputString += "TIPS<br>"
    johnResult.tips.forEach(tip => {
        outputString += tip + "<br>"
    });

    outputString += "TOTAL BILLS<br>"
    johnResult.totalBills.forEach(totalBill => {
        outputString += totalBill + "<br>"
    });

    outputString += "<h2>Victor</h2>"
    outputString += "TIPS<br>"
    victorResult.tips.forEach(tip => {
        outputString += tip + "<br>"
    });

    outputString += "TOTAL BILLS<br>"
    victorResult.totalBills.forEach(totalBill => {
        outputString += totalBill + "<br>"
    });

    if(calculateTipAverage(victorResult.tips) > calculateTipAverage(johnResult.tips)){
        console.log("Victor Family has higher tips")
    } else {
        console.log("John Family has higher tips")
    }


    outputElement.innerHTML = outputString
}



