// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var smsTotal = 0;
var callsTotal = 0;
//add an event listener for when the add button is pressed
addBtn.addEventListener('click', function(){
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    // * display the latest total on the screen
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
});

