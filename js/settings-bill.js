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
var callsTotalElemSet = document.querySelector(".callTotalSettings");
var smsTotalElemSet = document.querySelector(".smsTotalSettings");
var totalCostElemSet = document.querySelector(".totalSettings");

var callTotalSet= 0;
var smsTotalSet = 0;
//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener('click', function(){
    if(parseFloat(callCostSetting.value)>0){
        callCost = parseFloat(callCostSetting.value);
    }
    if(parseFloat(smsCostSetting.value)>0){
        smsCost = parseFloat(smsCostSetting.value);
    }
    if(parseFloat(warningLevelSetting.value)>0){
        warningLevel = parseFloat(warningLevelSetting.value);
    }
    if(parseFloat(criticalLevelSetting.value)>0){
        dangerLevel = parseFloat(criticalLevelSetting.value);
    }
})

//add an event listener for when the add button is pressed
addBtnSettings.addEventListener('click', function(){

    var checkedRadioBtnSet = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtnSet){
        var billItemTypeSet = checkedRadioBtnSet.value
    }
    if (billItemTypeSet === "call"){
        callTotalSet += callCost;
    }
    else if (billItemTypeSet === "sms"){
        smsTotalSet += smsCost;
    }
    console.log(callTotalSet)
    console.log(callCost)

    callsTotalElemSet.innerHTML = callTotalSet.toFixed(2);
    smsTotalElemSet.innerHTML = smsTotalSet.toFixed(2);
    var totalCostSet = callTotalSet + smsTotalSet;
    totalCostElemSet.innerHTML = totalCostSet.toFixed(2);

    if(totalCostSet >= dangerLevel){
        totalCostElemSet.classList.add("danger");
    } else if(totalCostSet >= warningLevel){
        totalCostElemSet.classList.add("warning");
    }
})
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
