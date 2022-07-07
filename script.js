let textArea = document.getElementById("userComment");
let characterCounter = document.getElementById("charCount");
const x = 140;

function myFunction() {
  let name = document.getElementById("userName").value;
  let comment = document.getElementById("userComment").value;
  let email = document.getElementById("userEmail").value;

  let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/; // Checks Email

  if (name && comment && email.match(regexEmail)) {
    document.getElementById("comment1").innerHTML = comment;
    document.getElementById("meta_author").innerHTML = name;
  } else {
    return alertBox();
  }
}

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = x - numOfEnteredChars;
  characterCounter.textContent = counter + "/140";

  if (counter < 10) {
    characterCounter.style.color = "red";
  } else if (counter < 20) {
    characterCounter.style.color = "orange";
  } else {
    characterCounter.style.color = "white";
  }
};

textArea.addEventListener("input", countCharacters);

const submit = document.getElementById("submit");
submit.addEventListener("click", myFunction);

// submit returns:

function alertBox() {
  alert("Please Complete Form");
}