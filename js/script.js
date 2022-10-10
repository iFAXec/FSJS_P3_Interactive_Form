const pageLoad = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role");
const selectJobRole = document.getElementById("title");


//name field has focus when the page loads
function windowLoad(){
    pageLoad.focus();
}
windowLoad();

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
 







