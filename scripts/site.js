"use strict"

//input 

const inputNumberOfScoops = document.getElementById("inputNumberOfScoops");
const inputCone = document.getElementById("inputCone");
const inputCup = document.getElementById("inputCup");
const inputSprinkles = document.getElementById("inputSprinkles");
const inputWhippedCream = document.getElementById("inputWhippedCream");
const inputHotFudge = document.getElementById("inputHotFudge");
const inputCherry = document.getElementById("inputCherry");

//button

const submitOrderBtn = document.getElementById("submitOrderBtn");

//output

const outputBasePrice = document.getElementById("outputBasePrice");
const outputTax = document.getElementById("outputTax");
const outputTotalDue = document.getElementById("outputTotal Due");

window.onload = function(){
    let cupCheckbox = document.getElementById("inputCup");
    cupCheckbox.onclick = onHideOrShowToppingOptions;

}

function onHideOrShowToppingOptions (){
    let cupCheckbox = document.getElementById("inputCup").checked;
    let toppingOptions = document.getElementById("toppingOptions");

    if (cupCheckbox.checked) {
        toppingOptions.style.display = "block";
    }

    else{
        toppingOptions.style.display = "none";
    }
}