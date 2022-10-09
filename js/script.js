const pageLoad = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role");
const selectJobRole = document.getElementById("title");
const valueJobRole = document.querySelector("option"[value]);
console.log(valueJobRole);






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


function hideOrDisplayOther(){  

    for (let i = 0; i < valueJobRole.length; i++) {

        if (valueJobRole[i] === "other") {
            otherJobRole.style.display = "block";    
        } else {
            otherJobRole.style.display = "none";    
    }    
        
    }
        
};

console.log(hideOrDisplayOther());

selectJobRole.addEventListener("change", hideOrDisplayOther);
 







