let price = 45;

function dailyProduction() {
    const valueShedA = parseInt(document.getElementById("quantityInputA").value);
    document.getElementById("dailyShedA").innerHTML = "Your production in Shed A is " + valueShedA + " litres per day"
    console.log(valueShedA)

    const valueShedB = parseInt(document.getElementById("quantityInputB").value);
    document.getElementById("dailyShedB").innerHTML = "Your production in Shed B is " + valueShedB + " litres per day"
    console.log(valueShedB)

    const valueShedC = parseInt(document.getElementById("quantityInputC").value);
    document.getElementById("dailyShedC").innerHTML = "Your production in Shed C is " + valueShedC + " litres per day"
    console.log(valueShedC)

    const valueShedD = parseInt(document.getElementById("quantityInputD").value);
    document.getElementById("dailyShedD").innerHTML = "Your production in Shed D is " + valueShedD + " litres per day"
    console.log(valueShedD)

    const totalProduction = parseInt(valueShedA + valueShedB + valueShedC + valueShedD)
    document.getElementById("totalDailySheds").innerHTML = "Your production in all sheds is " + totalProduction + " litres per day"
    console.log(totalProduction)

    const weeklyIncome = totalProduction * 7 * price;
    document.getElementById("weeklyIncome").innerHTML = "Your weekly income will be Ksh " + weeklyIncome;

    const yearlyIncome = totalProduction * 366 * price;
    document.getElementById("yearlyIncome").innerHTML = "Your yearly income will be Ksh " + yearlyIncome;

    const janIncome = totalProduction * 31 * price;
    document.getElementById("jan").innerHTML = "Your  January income will be Ksh " + janIncome;
    const febIncome = totalProduction * 29 * price;
    document.getElementById("feb").innerHTML = "Your  February income will be Ksh " + febIncome;
    const marIncome = totalProduction * 31 * price;
    document.getElementById("mar").innerHTML = "Your  March income will be Ksh " + marIncome;
    const aprIncome = totalProduction * 30 * price;
    document.getElementById("apr").innerHTML = "Your April income will be Ksh " + aprIncome;
    const mayIncome = totalProduction * 31 * price;
    document.getElementById("may").innerHTML = "Your May income will be Ksh " + mayIncome;
    const junIncome = totalProduction * 30 * price;
    document.getElementById("jun").innerHTML = "Your June income will be Ksh " + junIncome;
    const julIncome = totalProduction * 31 * price;
    document.getElementById("jul").innerHTML = "Your July income will be Ksh " + julIncome;
    const augIncome = totalProduction * 31 * price;
    document.getElementById("aug").innerHTML = "Your August income will be Ksh " + augIncome;
    const sepIncome = totalProduction * 30 * price;
    document.getElementById("sep").innerHTML = "Your September income will be Ksh " + sepIncome;
    const octIncome = totalProduction * 31 * price;
    document.getElementById("oct").innerHTML = "Your October income will be Ksh " + octIncome;
    const novIncome = totalProduction * 30 * price;
    document.getElementById("nov").innerHTML = "Your November income will be Ksh " + novIncome;
    const decIncome = totalProduction * 31 * price;
    document.getElementById("dec").innerHTML = "Your December income will be Ksh " + decIncome;

}
submitButton.addEventListener("click", dailyProduction)