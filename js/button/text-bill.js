var billTypeText = document.querySelector(".billTypeText");
var addBtnTex = document.querySelector(".addToBillBtn");
var callsTotalElemTex = document.querySelector(".callTotalOne");
var smsTotalElemTex = document.querySelector(".smsTotalOne");
var totalCostElemTex = document.querySelector(".totalOne");
var textInstance = TextBill();

addBtnTex.addEventListener('click', function(){
    textInstance.bill(billTypeText.value);
    callsTotalElemTex.innerHTML = textInstance.call();
    smsTotalElemTex.innerHTML = textInstance.sms();
    totalCostElemTex.innerHTML = textInstance.total();

    if(textInstance.level() === "danger"){
        totalCostElemTex.classList.add("danger");
    } else if(textInstance.level() === "warning"){
        totalCostElemTex.classList.add("warning");
    }
});

