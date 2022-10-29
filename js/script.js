const nameElement = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role");
const selectJobRole = document.getElementById("title");



//name field has focus when the page loads
function windowLoad(){
    nameElement.focus();
}
windowLoad();


//<------Job Role-------->
//hide other field under job role when form loads
function hideOtherField(){
    otherJobRole.style.display = "none";
}
hideOtherField(); 

//Display or hide other field based on job role selected
function hideOrDisplayOther(){  
    const valueJobRole = selectJobRole.value;
    //console.log(valueJobRole);
        if (valueJobRole === "other") {
                otherJobRole.style.display = "block";    
            } else {
                otherJobRole.style.display = "none";    
        }    
};
//console.log(hideOrDisplayOther());
selectJobRole.addEventListener("change", hideOrDisplayOther);
 

//<------T-Shirt Info -------->
const designSelect = document.getElementById("design");
//console.log(designSelect);
const shirtSelect = document.getElementById("color")
//console.log(shirtSelect);
const shirtColorOption = document.querySelectorAll("#color option");
//console.log(shirtColorOption);

shirtSelect.disabled = true;

designSelect.addEventListener("change", e=>{
        shirtSelect.disabled = false;    
        const designSelectValue = e.target.value;     
        if(designSelectValue === "js puns"){
            shirtColorOption[1].selected = true;
        }else if( designSelectValue === "heart js"){
            shirtColorOption[4].selected = true;
        }
    for (let i = 1; i < shirtColorOption.length; i++){
    const shirtTheme = shirtColorOption[i].getAttribute("data-theme");
   // console.log(shirtTheme);
    if(designSelectValue === shirtTheme){
        shirtColorOption[i].hidden = false;      
    }else{
        shirtColorOption[i].hidden = true;       
    }
}
});

//<-------------------register for Activities----------->

const checkboxes = document.querySelectorAll("input[type='checkbox']");
console.log(checkboxes);
const activitiesField = document.querySelector(".activities");
console.log(activitiesField);
let total = 0;

activitiesField.addEventListener("change", (e)=>{

    const clicked = e.target;
    //console.log(clicked);
    const clickedDataCost = clicked.getAttribute("data-cost");    
    const clickValue = parseInt(clickedDataCost);
    const totalAmount = document.querySelector(".activities-cost");    
    const clickedDayAndTime = clicked.getAttribute("data-day-and-time");
  
    //console.log(clickedDayAndTime);
       if(clicked.checked){
        total += clickValue;
       //console.log(total);      
      }else{
       total -= clickValue;
       //console.log(total);
    };  

totalAmount.innerHTML = `Total: $${total}`;

//Prevent users from selecting activity that occure at the same time
//Loop through all the checkboxes to get the date ad time attribute and compare with click attribute
checkboxes.forEach(checkbox => {
    const checkboxDayAndTime = checkbox.getAttribute("data-day-and-time");
      if(clicked.checked && clicked !== checkbox && checkboxDayAndTime === clickedDayAndTime ){
        checkbox.disabled = true;
        checkbox.parentElement.classList.add("disabled");
    } 
    if(!clicked.clicked && checkbox.disabled && clickedDayAndTime === checkboxDayAndTime ){
        checkbox.disabled = false;
        checkbox.parentElement.classList.remove("disbaled");
    }    
});
});


//<----Tab functionality on checkboxes ---->
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("focus", (e) => {
        e.target.parentElement.classList.add("focus");    
    });
    
    checkbox.addEventListener("blur", (e) => {
        e.target.parentElement.classList.remove("focus");
    });
});


//<-----Payment info----->
 const selectPayment = document.querySelector(".payment-methods");
//console.log(selectPayment);

//Make credit card as a default drop down item
const paymentOptions = document.getElementById("payment")[1];
const paypalInfo = document.getElementById("paypal");
const bitcoinInfo = document.getElementById("bitcoin");
paymentOptions.selected = "true";
paypalInfo.hidden = true;
bitcoinInfo.hidden = true;


selectPayment.addEventListener("change", (e)=>{
    const creditCardInfo = document.getElementById("credit-card");

    const paymentValue = e.target.value;
    //console.log(paymentValue);

    if(paymentValue === "paypal"){
        paypalInfo.hidden = false;
        creditCardInfo.hidden = true;
        bitcoinInfo.hidden = true;
    }else if (paymentValue === "bitcoin"){
        bitcoinInfo.hidden = false;
        creditCardInfo.hidden = true;
        paypalInfo.hidden = true;
    } else{
        creditCardInfo.hidden = false;
        paypalInfo.hidden= true;
        bitcoinInfo.hidden = true;
    }    
});


//<-----form validation----->
const conferenceForm  = document.querySelector("form");
const emailElement = document.getElementById("email");
const activitiesElement = document.getElementById("activities");
const totalElement = document.getElementById("activities-cost");
//console.log(activitiesElement);



//<----Form Accessibility --->
//validation pass helper fuction and loads on page load
function validationPass(element){
    element.parentElement.classList.add("valid");
    element.parentElement.classList.remove("not-valid")
    element.parentElement.lastElementChild.style.display = "none";
}

//validation fail helper function and loads on page load
function validationFail(element){
    element.parentElement.classList.add("not-valid");    
    element.parentElement.classList.remove("valid");
    element.parentElement.lastElementChild.style.display = "block";
}


//<-----form validation contd----->
//Name helper function
function validNameCheck() {
    const nameValue = nameElement.value;
    //console.log(nameValue);
    const testNameValidity = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    if(testNameValidity){
        validationPass(nameElement);
    }else{
        validationFail(nameElement);
    }
    return testNameValidity;
}
//console.log(validNameCheck());


//Email helper function
function validEmailCheck(){
    const emailValue = emailElement.value;
    //console.log(emailValue);
    const testEmailValidity = /^[^@.]+@[^@.]+\.[a-z]+$/i.test(emailValue);

    if(testEmailValidity){
        validationPass(emailElement);
    }else{
        validationFail(emailElement);
    }    
    return testEmailValidity;
}

//console.log(validEmailCheck());


//Register activity helper function
function validRegisterCheck(){
    const testAmountValidity = totalElement > 0;
    if(testAmountValidity) {
        validationPass(totalElement);
  }else{
        validationFail(totalElement);
  }
  return testAmountValidity;
}

//console.log(validRegisterCheck());


//Credit card payment helper function
const creditCardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cVVNumber = document.querySelector("#cvv");


function validCreditCardCheck(){   
    const creditCardValue = creditCardNumber.value;
    const testCreditCard = /^[0-9]{13,16}$/.test(creditCardValue);
    return testCreditCard;
}
//console.log(validCreditCardCheck());

function validZipCodeCheck(){
    const zipCodeValue = zipCode.value;
    const testZipCode = /^\d{5}$/.test(zipCodeValue);
    return testZipCode;
}
//console.log(validZipCodeCheck());

function validCVVCheck(){
    const cVVValue = cVVNumber.value;
    const testCVV = /^\d{3}$/.test(cVVValue);
    return testCVV;
}
//console.log(validCVVCheck());

conferenceForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    if(!validNameCheck()){
        e.preventDefault();
    }
    if(!validEmailCheck()){
        e.preventDefault();
    }
    if(!validRegisterCheck()){
        e.preventDefault;
    }
    if(!validCreditCardCheck()){
        e.preventDefault;
    }
    if(!validZipCodeCheck()){
        e.preventDefault;
    }
    if(!validCVVCheck()){
        e.preventDefault;
    }
});
