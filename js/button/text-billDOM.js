var billTypeText = document.querySelector(".billTypeText");
var addBtnTex = document.querySelector(".addToBillBtn");
var templateSource = document.querySelector(".userTemplate").innerHTML;
var textInstance = TextBill();

addBtnTex.addEventListener('click', function () {
    textInstance.bill(billTypeText.value);

    var userData = {
        callData: textInstance.call(),
        smsData: textInstance.sms(),
        totalData: textInstance.total()
    };

    var userTemplate = Handlebars.compile(templateSource);
    
    var userDataElem = document.querySelector(".userData");

    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;

    var totalOneDisplay = document.querySelector(".totalOne");
    if (textInstance.level() === "danger") {
        totalOneDisplay.classList.add("danger");
    } else if (textInstance.level() === "warning") {
        totalOneDisplay.classList.add("warning");
    }
});

