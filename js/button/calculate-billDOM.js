var calculateButton = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringField = document.querySelector(".billString");
var calculateInstance = CalculateBtn();


function calculateBtnClicked(){

calculateInstance.bill(billStringField.value);
billTotalElement.innerHTML = calculateInstance.total();

if (calculateInstance.level() === "safe"){
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
}
if (calculateInstance.level() === "warning"){
    billTotalElement.classList.add("warning");
    billTotalElement.classList.remove("danger");
}
if (calculateInstance.level() ==="danger"){
    billTotalElement.classList.add("danger");
}
calculateInstance.clear();
}
calculateButton.addEventListener('click', calculateBtnClicked);