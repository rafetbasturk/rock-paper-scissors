const arr = ["rock", "paper", "scissors"]

const computerPlay = () => {
  const randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum]
}

let playerWin = 0
let computerWin = 0

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("It is a tie!")
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
      computerWin++
    } else {
      console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
      playerWin++
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
      computerWin++
    } else {
      console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
      playerWin++
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
      computerWin++
    } else {
      console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
      playerWin++
    }
  }

  console.log(`The player score is ${playerWin} and the computer score is ${computerWin}.`);
}

const game = (n) => {
  for (let i = 1; i <= n; i++) {
    const playerSelection = prompt("Rock, paper or scissors").toLowerCase()
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
  }
}

game(5)