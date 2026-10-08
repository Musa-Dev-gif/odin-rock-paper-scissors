console.log("Hello Musa - Game loading!");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Test it
console.log("Computer picks: " + getComputerChoice());
console.log("Computer picks: " + getComputerChoice());
console.log("Computer picks: " + getComputerChoice());
