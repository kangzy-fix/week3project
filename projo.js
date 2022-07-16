document.getElementById("submitButton").onclick = function(){
    let quantityInputA = document.getElementById("quantityInputA").value;
    console.log(quantityInputA);

    let quantityInputB = document.getElementById("quantityInputB").value;
    console.log(quantityInputB);

    let quantityInputC = document.getElementById("quantityInputC").value;
    console.log(quantityInputC);

    let quantityInputD = document.getElementById("quantityInputD").value;
    console.log(quantityInputD);
}
var totalProduction = document.getElementById("totalProduction").innerHTML = function(){
    let quantityInputA = document.getElementById("quantityInputA").value;
    // return quantityInputA;

    let quantityInputB = document.getElementById("quantityInputB").value;
    // return quantityInputB;

    let quantityInputC = document.getElementById("quantityInputC").value;
    // return quantityInputC;

    let quantityInputD = document.getElementById("quantityInputD").value;
    // return quantityInputD;

    totalProduction = quantityInputA + quantityInputB + quantityInputC + quantityInputD
    console.log(totalProduction)
}