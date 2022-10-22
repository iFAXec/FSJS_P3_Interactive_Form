const pageLoad = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role");
const selectJobRole = document.getElementById("title");





//name field has focus when the page loads
function windowLoad(){
    pageLoad.focus();
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

const shirtColorOption = document.querySelectorAll("#color option");
const shirtSelect = document.getElementById("color")


shirtSelect.disabled = true;

designSelect.addEventListener("change", e=>{
        shirtSelect.disabled = false;
        const shirtCollection = shirtSelect.children;
        //console.log(shirtCollection);
    for (let i = 1; i < shirtColorOption.length; i++){
    const designSelectValue = e.target.value;   
    const shirtTheme = shirtColorOption[i].getAttribute("data-theme");
    //console.log(designSelectValue);
    //console.log(shirtTheme);

    if(designSelectValue === shirtTheme){
        shirtColorOption[i].hidden = false;
        shirtColorOption[i].setAttribute("selected", true)
    }else{
        shirtColorOption[i].hidden = true;
        shirtColorOption[i].setAttribute("selected", false);
    }
}
});

//<-------------------register for Activities----------->

const activitiesField = document.querySelector(".activities");
//console.log(activitiesField);
let total = 0;

activitiesField.addEventListener("change", (e)=>{

    const clicked = e.target;
    const clickedDataCost = clicked.getAttribute("data-cost");
    const clickValue = parseInt(clickedDataCost);
    const totalAmount = document.querySelector(".activities-cost");

     if(clicked.checked){
        total += clickValue;
       //console.log(total);      
      }else{
       total -= clickValue;
       //console.log(total);
    }  
totalAmount.innerHTML = total;
}
);






