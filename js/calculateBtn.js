function CalculateBtn(){
    var billTotal = 0;
    function addBill(billString){
        var billItems = billString.split(',');
        for (var i=0;i<billItems.length;i++){
            if (billItems[i].trim() === "call"){
                billTotal += 2.75;
            }
            else if (billItems[i].trim() === "sms"){
                billTotal += 0.75;
            }
        }
    }
    function displayTotal(){
        var billDisplay = billTotal.toFixed(2);
        return billDisplay;
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
    function clearingTot(){
        billTotal = 0;
    }
    return{
        bill : addBill,
        total : displayTotal,
        level: determineLevel,
        clear: clearingTot
    }

}