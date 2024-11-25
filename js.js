// DOM-element
const playButton = document.querySelector(".playbtn");
const diceThrow = document.getElementById("diceThrow");
const introForm = document.getElementById("introForm");
const formSubmit = document.getElementById("submit");
const throwBtn = document.getElementById("throw");
const freezeBtn = document.getElementById("freeze");
const playerCard = document.getElementById("playercard");
const h2Player = document.getElementById("h2Player");
const h2Dice = document.getElementById("h2Dice");
const h2ThisRound = document.getElementById("h2ThisRound");
const h2Rounds = document.getElementById("h2Rounds");
const h2Total = document.getElementById("h2Total");

// Dice element
const diceElement = [
  document.getElementById("die1"),
  document.getElementById("die2"),
  document.getElementById("die3"),
  document.getElementById("die4"),
  document.getElementById("die5"),
  document.getElementById("die6"),
];

// variabler
let diceValuie = 0;
let thisRound = 0;
let totalRounds = 0;
let totalPoints = 0;

// Events
playButton.addEventListener("click", startGame);
introForm.addEventListener("submit", handleIntroFormSubmit);
throwBtn.addEventListener("click", throwDice);
freezeBtn.addEventListener("click", freezePoints);

//Klicka play
function startGame() {
  playButton.style.display = "none";
  diceThrow.style.display = "flex";
}

//Skriva in namn
function handleIntroFormSubmit(e) {
  e.preventDefault();
  gameStart();
}

//''play-board''
function gameStart(e) {
  introForm.style.display = "none";
  throwBtn.style.display = "block";
  playerCard.style.display = "block";
  h2Player.innerText = "Player : " + document.getElementById("name").value;
}

function throwDice() {
  diceReset();
  freezeBtn.style.display = "block";
  totalRounds++;
  h2Rounds.innerText = "Total Rounds : " + totalRounds;

  diceValue = 1 + Math.floor(Math.random() * 6);
  h2Dice.innerText = "Dice Value : " + diceValue;

  thisRound += diceValue;
  h2ThisRound.innerText = "This Round : " + thisRound;

  handleDiceRoll();
}

function handleDiceRoll() {
  switch (diceValue) {
    case 1:
      diceElement[0].style.display = "flex";
      alert("YOU THREW : 1 OPS! NO POINTS! :(");
      clearRound();
      diceReset();
      break;
    case 2:
      diceElement[1].style.display = "flex";
      break;
    case 3:
      diceElement[2].style.display = "flex";
      break;
    case 4:
      diceElement[3].style.display = "flex";
      break;
    case 5:
      diceElement[4].style.display = "flex";
      break;
    case 6:
      diceElement[5].style.display = "flex";
      break;
  }
}

// Freeze poäng och kolla om man vinner
function freezePoints() {
  totalPoints += thisRound;
  h2Total.innerText = "Total Points : " + totalPoints;

  if (totalPoints >= 100) {
    alert(
      `CONGRATULATIONS YOU WIN! Total rounds : ${totalRounds} and Total points : ${totalPoints}`
    );
    location.reload(); // Reload the page to reset the game
  }

  clearRound();
  diceReset();
}

function clearRound() {
  thisRound = 0;
  h2ThisRound.innerText = "This Round : ";
  h2Dice.innerText = "Dice Value : ";
}

function diceReset() {
  diceElement[0].style.display = "none";
  diceElement[1].style.display = "none";
  diceElement[2].style.display = "none";
  diceElement[3].style.display = "none";
  diceElement[4].style.display = "none";
  diceElement[5].style.display = "none";
}
