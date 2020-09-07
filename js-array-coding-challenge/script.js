"use strict"

let billObject = {
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

let outputElement = document.getElementById("output")

document.getElementById("calculate").onclick = () => {
    billObject.billValues = []
    document.getElementById("billValues").value.split(",").forEach( billValue => {
        billObject.billValues.push(Number(billValue))
    })
    
    let calcResult = billObject.calculateTips()
    let outputString = ""

    outputString += "TIPS<br>"
    calcResult.tips.forEach(tip => {
        outputString += tip + "<br>"
    });

    outputString += "TOTAL BILLS<br>"
    calcResult.totalBills.forEach(totalBill => {
        outputString += totalBill + "<br>"
    });

    outputElement.innerHTML = outputString
}



