const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];
checkBtn.addEventListener("click", validate);

function validate() {
  errorMsg.style.display = "none";
  if (billAmount.value > 0) {
    amountToBeReturned = cashGiven.value - billAmount.value;
    calcAmount(amountToBeReturned);
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "Invalid Bill Amount";
  }
}

function calcAmount(amountToBeReturned) {
  for(let i=0; i<notes.length; i++){
    noOfNotes[i].innerHTML = amountToBeReturned / notes[i];
    amountToBeReturned %= notes[i];
  }
}
