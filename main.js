const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes = document.querySelector(".no-of-notes");

checkBtn.addEventListener("click", validate);

function validate(){
    errorMsg.style.display = "none";
    if(billAmount.value > 0){
        amountToBeGiven = cashGiven.value - billAmount.value;
        calcAmount(amountToBeGiven);
    }else{
        errorMsg.style.display = "block";
        errorMsg.innerText = "Invalid Bill Amount";
    }
}

function calcAmount(amountToBeGiven){
    
}