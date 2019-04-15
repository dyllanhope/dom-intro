// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addBtnTex = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var callsTotalElemTex = document.querySelector(".callTotalOne");
var smsTotalElemTex = document.querySelector(".smsTotalOne");
var totalCostElemTex = document.querySelector(".totalOne");
var smsTotalTex = 0;
var callsTotalTex = 0;
//add an event listener for when the add button is pressed
addBtnTex.addEventListener('click', function(){
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callsTotalTex += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotalTex += 0.75;
    }
    // * display the latest total on the screen
    callsTotalElemTex.innerHTML = callsTotalTex.toFixed(2);
    smsTotalElemTex.innerHTML = smsTotalTex.toFixed(2);
    var totalCostTex = callsTotalTex + smsTotalTex;
    totalCostElemTex.innerHTML = totalCostTex.toFixed(2);

    if(totalCostTex >= 50){
        totalCostElemTex.classList.add("danger");
    } else if(totalCostTex >= 30){
        totalCostElemTex.classList.add("warning");
    }
});

