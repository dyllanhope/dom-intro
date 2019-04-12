// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var addBtnSettings = document.querySelector(".settingsBillAddButton");
//get a reference to the 'Update settings' button
var updateBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 2.75;
var smsCost = 0.75;
var warningLevel = 30;
var dangerLevel = 50;
// create a variables that will keep track of all three totals.
var callsTotalElem = document.querySelector(".callTotalSettings");
var smsTotalElem = document.querySelector(".smsTotalSettings");
var totalCostElem = document.querySelector(".totalSettings");

var callTotal= 0;
var smsTotal = 0;
//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener('click', function(){
    callCost = callCostSetting.value;
    smsCost = smsCostSetting.value;
    warningLevel = warningLevelSetting.value;
    dangerLevel = criticalLevelSetting.value;
})
//add an event listener for when the add button is pressed
addBtnSettings.addEventListener('click', function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }

    if (billItemType === "call"){
        callTotal += callCost;
    }
    else if (billItemType === "sms"){
        smsTotal += smsCost;
    }

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if(totalCost >= dangerLevel){
        totalCostElem.classList.add("danger");
    } else if(totalCost >= warningLevel){
        totalCostElem.classList.add("warning");
    }
})
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
