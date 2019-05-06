var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var addBtn = document.querySelector(".radioBillAddBtn");
var templateSourceRadio = document.querySelector(".userTemplateRadio").innerHTML;
var radioInstance = RadioBtn();


window.addEventListener('load',function(){
    buildTotals();
})

addBtn.addEventListener('click', function () {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    radioInstance.bill(billItemType);

    buildTotals();
})

Handlebars.registerHelper('isDanger', function () {
    var testingLevel = radioInstance.level();

    if (testingLevel === "danger") {
        return true;
    }
});
Handlebars.registerHelper('isWarning', function () {
    var testingLevel = radioInstance.level();

    if (testingLevel === "warning") {
        return true;
    }
});
function buildTotals() {
    var userDataRadio = {
        callData: "R" + radioInstance.call(),
        smsData: "R" + radioInstance.sms(),
        totalData: "R" + radioInstance.total()
    };

    var userTemplateRadio = Handlebars.compile(templateSourceRadio);

    var userDataElemRadio = document.querySelector(".userDataRadioBill");

    var userDataHTMLRadio = userTemplateRadio(userDataRadio);
    userDataElemRadio.innerHTML = userDataHTMLRadio;
}


