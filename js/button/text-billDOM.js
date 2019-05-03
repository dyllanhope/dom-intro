var billTypeText = document.querySelector(".billTypeText");
var addBtnTex = document.querySelector(".addToBillBtn");
var templateSource = document.querySelector(".userTemplate").innerHTML;
var textInstance = TextBill();

addBtnTex.addEventListener('click', function () {
    textInstance.bill(billTypeText.value);
    var userData = {
        callData: "R" + textInstance.call(),
        smsData: "R" + textInstance.sms(),
        totalData: "R" + textInstance.total()
    };
    var userTemplate = Handlebars.compile(templateSource);

    var userDataElem = document.querySelector(".userDataTextBill");

    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;

});
Handlebars.registerHelper('isDangerText', function () {
    var testingLevel = textInstance.level();

    if (testingLevel === "danger") {
        return true;
    } 
});
Handlebars.registerHelper('isWarningText', function () {
    var testingLevel = textInstance.level();

    if (testingLevel === "warning") {
        return true;
    } 
});
