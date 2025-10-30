// Generate random number 1–6 for player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

// Change player 1 image
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// Generate random number 1–6 for player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// Change player 2 image
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Change <h1> text depending on who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
