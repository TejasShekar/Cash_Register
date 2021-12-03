const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const cashGivenText = document.querySelector(".cash");
const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const notes = [2000, 500, 100, 20, 10, 5, 1];

cashGiven.style.display = "none";
cashGivenText.style.display = "none";
checkBtn.style.display = "none";

nextBtn.addEventListener("click", proceed);
checkBtn.addEventListener("click", validate);


function proceed() {
  if (Number(billAmount.value) > 0) {
    hideMessage();
    cashGivenText.style.display = "block";
    cashGiven.style.display = "initial";
    checkBtn.style.display = "block";
    nextBtn.style.display = "none";
  } else {
    showMessage("Enter a Valid Bill Amount");
  }
}

function validate() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    cashGivenText.style.display = "block";
    cashGiven.style.display = "initial";
    if (Number(cashGiven.value) > Number(billAmount.value)) {
      const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      console.log(amountToBeReturned);
      calcAmount(amountToBeReturned);
    } else if (Number(cashGiven.value) == 0) {
      showMessage(
        "If no cash is given, then what do you want me to calculate 😑?"
      );
    } else if (Number(cashGiven.value) == Number(billAmount.value)) {
      showMessage("Just put the cash given into the register and chill");
    } else if (Number(cashGiven.value) < 0) {
      showMessage("Negative cash ?? Really ? Are you mentally stable ?");
    } else if (Number(billAmount.value) > Number(cashGiven.value)) {
      showMessage("Ask for more cash !");
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
