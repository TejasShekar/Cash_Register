const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const cashGivenText = document.querySelector(".cash");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

// cashGiven.style.display = "none";
// cashGivenText.style.display = "none";

checkBtn.addEventListener("click", validate);

function validate() {
  hideMessage();
  if (billAmount.value > 0) {
    // cashGiven.style.display = "block";
    // cashGivenText.style.display = "block";
    if (cashGiven.value > 0) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      console.log(amountToBeReturned);
      calcAmount(amountToBeReturned);
    } else if (cashGiven.value == 0) {
      showMessage(
        "If no cash is given, then what do you want me to calculate 😑?"
      );
    } else {
      showMessage("Negative cash ?? Really ? Are you mentally stable ?");
    }
  } else {
    showMessage("Enter a Valid Bill Amount");
  }
}

function calcAmount(amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    noOfNotes[i].innerHTML = Math.floor(amountToBeReturned / notes[i]);
    amountToBeReturned %= notes[i];
  }
}

function hideMessage() {
  errorMsg.style.display = "none";
}

function showMessage(msg) {
  errorMsg.style.display = "block";
  errorMsg.innerText = msg;
}
