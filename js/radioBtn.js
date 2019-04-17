function RadioBtn(){ 
    var billTotal = 0;
    var callTotal = 0;
    var smsTotal = 0;
    function addToBill(billString){
        if (billString.trim() === "call"){
            callTotal += 2.75;
        }
        else if (billString.trim() === "sms"){
            smsTotal += 0.75;
        }
    }
    function displayTotal(){
        billTotal = callTotal + smsTotal;
        return billTotal.toFixed(2);
    }
    function displayCall(){
        return callTotal.toFixed(2);
    }
    function displaySms(){
        return smsTotal.toFixed(2);
    }
    function determineLevel(){
        if((billTotal >= 30)&&(billTotal < 50)){
            return "warning";
        } else if(billTotal >= 50){
            return "danger";
        } else {
            return "safe";
        }
    }
    return{
        bill: addToBill,
        total: displayTotal,
        call: displayCall,
        sms: displaySms,
        level: determineLevel
    }
}