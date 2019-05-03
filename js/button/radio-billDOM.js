var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var addBtn =  document.querySelector(".radioBillAddBtn");
var templateSourceRadio = document.querySelector(".userTemplateRadio").innerHTML;
var radioInstance = RadioBtn();

addBtn.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }
    radioInstance.bill(billItemType);

    var userDataRadio = {
        callData : radioInstance.call(),
        smsData : radioInstance.sms(),
        totalData : radioInstance.total()
    };

    var userTemplateRadio = Handlebars.compile(templateSourceRadio);

    var userDataElemRadio = document.querySelector(".userDataRadioBill");

    var userDataHTMLRadio = userTemplateRadio(userDataRadio);
    userDataElemRadio.innerHTML = userDataHTMLRadio;

    var totalTwoDisplay = document.querySelector(".totalTwo");
    if(radioInstance.level()==="danger"){
        totalTwoDisplay.classList.add("danger");
    } else if(radioInstance.level()==="warning"){
        totalTwoDisplay.classList.add("warning");
    }
})

