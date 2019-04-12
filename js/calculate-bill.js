//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringField = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
//  * this function should read the string value entered - split it on a comma.
var billString = billStringField.value;
var billItems = billString.split(',');
var billTotal = 0;
//  * loop over all the entries in the the resulting list
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
//  * check if it is a call or an sms and add the right amount to the overall total
    if (billItem === "call"){
        billTotal += 2.75;
    }
    else if (billItem === "sms"){
        billTotal += 0.75;
    }
}
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
if (roundedBillTotal > 20){
    billTotalElement.classList.add("warning");
}
if (roundedBillTotal > 30){
    billTotalElement.classList.add("danger");
}
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);