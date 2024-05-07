"use strict"

//input 

const inputNumberOfScoops = document.getElementById("inputNumberOfScoops");
const inputCone = document.getElementById("inputCone");
const inputCup = document.getElementById("inputCup");
const inputSprinkles = document.getElementById("inputSprinkles");
const inputWhippedCream = document.getElementById("inputWhippedCream");
const inputHotFudge = document.getElementById("inputHotFudge");
const inputCherry = document.getElementById("inputCherry");

const toppingOptions = document.getElementById("toppingOptions");

//button

const submitOrderBtn = document.getElementById("submitOrderBtn");

//output

const outputBasePrice = document.getElementById("outputBasePrice");
const outputTax = document.getElementById("outputTax");
const outputTotalDue = document.getElementById("outputTotal Due");

window.onload = function () {

    inputCone.onclick = onHideOrShowToppingOptions;
    inputCup.onclick = onHideOrShowToppingOptions;
    submitOrderBtn.onclick = onSubmitOrderBtnClick;

};

function onHideOrShowToppingOptions() {
    let shouldBeVisible = inputCup.checked;
    console.log(shouldBeVisible);

    if (shouldBeVisible) {
        //toppingOptions.style.display = "block"
        toppingOptions.style.visibility = "visible";
    }

    else {
        // toppingOptions.style.display = "none";
        toppingOptions.style.visibility = "hidden";

    }


};

function onSubmitOrderBtnClick() {
   
    let numberOfScoops = document.getElementById("inputNumberOfScoops").value;
    let outputBasePrice = document.getElementById("outputBasePrice");
    let outputTax = document.getElementById("outputTax");
    let outputTotalDue = document.getElementById("outputTotalDue");

    
    let basePrice;
    
    
    
    
    //number of scoops

    if (numberOfScoops == 1) {
       basePrice = 2.25
    }

    else if (numberOfScoops > 1) {
       basePrice = 2.25 + (numberOfScoops - 1) * 1.25;
    }

    //toppings
    if (document.getElementById("inputCup").checked) {
        if (document.getElementById("inputSprinkles").checked) {
            basePrice += .50;
        }
        else if (document.getElementById("inputWhippedCream").checked) {
            basePrice += .25;
        }

        else if (document.getElementById("inputHotFudge").checked) {
            basePrice += 1.25;
        }
        else if (document.getElementById("inputCherry").checked) {
            basePrice += .25; 
        }
       

    };
    
let tax = .08 * basePrice;
let totalDue = basePrice + tax;
outputBasePrice.innerHTML = basePrice.toFixed(2);
outputTax.innerHTML = tax.toFixed(2);
outputTotalDue.innerHTML = totalDue.toFixed(2);
}
    