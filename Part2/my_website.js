let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my Website, ${myName}. My name is Jennifer Rosen!`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my Website, ${storedName}. My name is Jennifer Rosen!`;
  }

  myButton.onclick = () => {
    setUserName();
  };

let showMessageButton = document.getElementById("showMessageButton");

function showMessage() {
    alert("Send me an email to rosen.je@northeastern.edu");
}

showMessageButton.onclick = showMessage;
