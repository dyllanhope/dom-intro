var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var addBtnSettings = document.querySelector(".settingsBillAddButton");
var updateBtn = document.querySelector(".updateSettings");

var callsTotalElemSet = document.querySelector(".callTotalSettings");
var smsTotalElemSet = document.querySelector(".smsTotalSettings");
var totalCostElemSet = document.querySelector(".totalSettings");

var settingsInstance = SettingBill();

updateBtn.addEventListener('click', function(){
    settingsInstance.update(callCostSetting.value,smsCostSetting.value,warningLevelSetting.value,criticalLevelSetting.value)
    if(settingsInstance.level()==="safe"){
        totalCostElemSet.classList.remove("warning");
        totalCostElemSet.classList.remove("danger");
    }
    if(settingsInstance.level()==="danger"){
        totalCostElemSet.classList.add("danger");
    }
    if(settingsInstance.level()==="warning"){
        totalCostElemSet.classList.add("warning");
        totalCostElemSet.classList.remove("danger");
    }
})

addBtnSettings.addEventListener('click', function(){

    var checkedRadioBtnSet = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtnSet){
        var billItemTypeSet = checkedRadioBtnSet.value
    }
    if(settingsInstance.level()>"danger"){
        settingsInstance.bill(billItemTypeSet);
        callsTotalElemSet.innerHTML = settingsInstance.callTotal();
        smsTotalElemSet.innerHTML = settingsInstance.smsTotal();
        totalCostElemSet.innerHTML = settingsInstance.total();

        if(settingsInstance.level()==="safe"){
            totalCostElemSet.classList.remove("warning");
            totalCostElemSet.classList.remove("danger");
        }
        if(settingsInstance.level()==="danger"){
            totalCostElemSet.classList.add("danger");
        }
        if(settingsInstance.level()==="warning"){
            totalCostElemSet.classList.add("warning");
            totalCostElemSet.classList.remove("danger");
        }
    } else {
        alert("You have exceeded the Critical level set, please update settings accordingly")
    }  
})
