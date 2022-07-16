document.getElementById("submitButton").onclick = function () {
    let quantityInputA = document.getElementById("quantityInputA").value;
    document.getElementById("shedA").innerHTML = quantityInputA;


    let quantityInputB = document.getElementById("quantityInputB").value;
    document.getElementById("shedB").innerHTML = quantityInputB;


    let quantityInputC = document.getElementById("quantityInputC").value;
    document.getElementById("shedC").innerHTML = quantityInputC;


    let quantityInputD = document.getElementById("quantityInputD").value;
    document.getElementById("shedD").innerHTML = quantityInputD;

    let totalProduction = 0;
    let sumArray = [quantityInputA, quantityInputB, quantityInputC, quantityInputD];

    for (var i = 0; i < sumArray.length; i++) {

        console.log(sumArray[i]);
        totalProduction += Number(sumArray[i]);
    }

    document.getElementById("totalP").innerHTML = totalProduction;

}

function incomeOverTime(selling_price, time) {


}



// var totalProduction = document.getElementById("totalProduction").innerHTML = function(){
//     let quantityInputA = document.getElementById("quantityInputA").value;
//     // return quantityInputA;

//     let quantityInputB = document.getElementById("quantityInputB").value;
//     // return quantityInputB;

//     let quantityInputC = document.getElementById("quantityInputC").value;
//     // return quantityInputC;

//     let quantityInputD = document.getElementById("quantityInputD").value;
//     // return quantityInputD;

//     totalProduction = quantityInputA + quantityInputB + quantityInputC + quantityInputD
//     console.log(totalProduction)