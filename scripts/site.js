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

window.onload = function(){
   
    inputCone.onclick =onHideOrShowToppingOptions;
    inputCup.onclick = onHideOrShowToppingOptions;
    submitOrderBtn.onclick = onSubmitOrderBtnClick;

};

function onHideOrShowToppingOptions (){
    let shouldBeVisible = inputCup.checked;
    console.log(shouldBeVisible);

    if (shouldBeVisible){
       // toppingOptions.style.display = "block"
        toppingOptions.style.visibility = "visible";
    }

    else {
       //toppingOptions.style.display = "none";
       toppingOptions.style.visibility = "hidden";

    }

   
}

function onSubmitOrderBtnClick(){
    let icecreamStartCost = 2.25;
    let numberOfScoops = inputNumberOfScoops.value 
    
  
    
    if (inputCone || inputCup){
        icecreamStartCost = 2.25;
    }
    else {
        console.log("error");
    }

    let toppingsCost = 0;

    if (document.getElementById("inputSprinkles").checked){
        toppingsCost = .50;
    }
    else if (document.getElementById("inputWhippedCream").checked){
        toppingsCost = .25;
    }

    else if (document.getElementById("inputHotFudge").checked){
        toppingsCost = 1.25;
    }
    else document.getElementById("inputCherry".checked {
        toppingsCost = .25;
    }

    let= numberOfScoops = inputNumberOfScoops.value;
    

    if (numberOfScoops = 1){

        scoopCost= icecreamStartCost;
    }

    else if (numberOfScoops >1){
        scoopCost = (numberOfScoops * 1.25) - 2.25;
    }

    let tax = 1.00;
    
    basePrice = scoopCost + toppingsCost;
    totalDue = basePrice + tax;
   
    outputBasePrice.innerHTML = basePrice;
    outputTax.innerHTML = tax;
    outputTotalDue.innerHTML = totalDue;

}

