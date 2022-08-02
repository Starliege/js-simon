let numbers = document.getElementById("numbers");
let numArr = [];
let num = 0;
let userNumArr = [];
let userNum = 0;

console.log("Genera numeri random...");
while (numArr.length<5) {
  let doppione = false;
  num = Math.floor(Math.random() * 98) + 1;
  console.log(num);

  for (let i=0; i<numArr.length; i++) {
    if (num == numArr[i]) {
      doppione = true;
      console.log("Il numero " + num + " è un doppione, lo salto!");
    }
  } 

  if (doppione == false) {
    numArr.push(num);
  }
} 

numbers.innerHTML += numArr;

setTimeout(function() {

  console.log("Chiede all'utente di inserire i numeri...");
  while (userNumArr.length<5) {
    let doppione = false;
    userNum = parseInt(prompt("Quali erano i numeri?"));  
    console.log(userNum);
  
    for (let i=0; i<userNumArr.length; i++) {
      if (userNum == userNumArr[i]) {
        doppione = true;
        alert("Non puoi inserire doppioni!");
        console.log("Il numero " + userNum + " è un doppione, lo salto!");
      }
    } 
  
    if (doppione == false) {
      userNumArr.push(userNum);
    }
  } 

  check();
}, 31000);

function check() {
  console.log("----------------------------------------------");
  console.log("Numeri random: " + numArr);
  console.log("Numeri inseriti dall'utente: " + userNumArr);
  console.log("----------------------------------------------");
  let corretto = true;
  let numIndovinati = [];
  for (i=0; i<numArr.length; i++) {
    if (numArr.includes(userNumArr[i])) {
      corretto = true;
      console.log(corretto);
      numIndovinati.push(userNumArr[i]);    }
    else {
      corretto = false;
      console.log(corretto);
    }
  }
  const body = document.getElementsByTagName("body")[0];
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("content").classList.add("turn");
  const opinion = document.getElementById("opinion")
  const guessed = document.getElementById("guessed")

  if (numIndovinati.length>0) {
    guessed.innerHTML = numIndovinati;

    if (numIndovinati.length<=4) {
      opinion.classList.add("ok");
      opinion.innerHTML = "Ne hai ricordati " + numIndovinati.length;
    } else if (numIndovinati.length==5) {
    body.classList.add("neon-king");
    guessed.classList.add("king");
    opinion.classList.add("king");
      opinion.innerHTML = "DAJE ROCCIA";
    }
  } else {
    opinion.classList.add("bad");
    body.classList.add("neon-bad");
    opinion.innerHTML = "Vabbè dai...";
  }
}