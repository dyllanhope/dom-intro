var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var addBtn =  document.querySelector(".radioBillAddBtn");
var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");
var totalCostElem = document.querySelector(".totalTwo");
var radioInstance = RadioBtn();

addBtn.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }
    radioInstance.bill(billItemType);
    callsTotalElem.innerHTML = radioInstance.call();
    smsTotalElem.innerHTML = radioInstance.sms();
    totalCostElem.innerHTML = radioInstance.total();

    if(radioInstance.level()==="danger"){
        totalCostElem.classList.add("danger");
    } else if(radioInstance.level()==="warning"){
        totalCostElem.classList.add("warning");
    }
})

