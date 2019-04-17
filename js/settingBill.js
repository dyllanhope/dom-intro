function SettingBill(){
    var callTotal =0.00;
    var smsTotal =0.00;
    var callCost =0.00;
    var smsCost =0.00;
    var warnLevel =0.00;
    var critLevel =0.00;
    var TotAmount = 0.00;
    function addToBill(billString){
        if (billString.trim() === "call"){
            callTotal += callCost;
        }
        else if (billString.trim() === "sms"){
            smsTotal += smsCost;
        }
    }
    function grandTotal(){
        TotAmount = smsTotal+callTotal;
        TotAmount = parseFloat(TotAmount);
        return TotAmount.toFixed(2);
    }
    function displayCall(){
        return callTotal.toFixed(2);
    }
    function displaySms(){
        return smsTotal.toFixed(2);
    }
    function updateSettings(callUp,smsUp,warnUp,critUp){
        callCost = parseFloat(callUp.trim());
        smsCost = parseFloat(smsUp.trim());
        warnLevel = parseFloat(warnUp.trim());
        critLevel = parseFloat(critUp.trim());
    }
    function determineLevel(){
        if((TotAmount >= warnLevel)&&(TotAmount < critLevel)){
            return "warning";
        } else if(TotAmount >= critLevel){
            return "danger";
        } else {
            return "safe";
        }
    }
    return{
        bill: addToBill,
        total: grandTotal,
        callTotal: displayCall,
        smsTotal: displaySms,
        level: determineLevel,
        update : updateSettings
    }
}