// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var addBtn =  document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
addBtn.addEventListener('click', function(){
//in the event listener get the value from the billItemTypeRadio radio buttons
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
// * display the latest total on the screen
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if(totalCost >= 50){
        totalCostElem.classList.add("danger");
    } else if(totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
})

