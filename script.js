const arr = ["rock", "paper", "scissors"]
const playerSelectionDisplay = document.querySelector(".main__player")
const computerSelectionDisplay = document.querySelector(".main__computer")
const resultDisplay = document.querySelector(".main__result")
const scoreDisplay = document.querySelector(".main__score")
const playerScore = document.querySelector(".header__player-score")
const computerScore = document.querySelector(".header__computer-score")
const modal = document.querySelector(".modal")
const message = document.querySelector(".modal__message")

const computerPlay = () => {
  const randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum]
}

let playerWin = 0
let computerWin = 0
let result = ""

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    result = "It is a tie!"
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerWin++
      result = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    } else {
      playerWin++
      result = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerWin++
      result = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    } else {
      playerWin++
      result = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerWin++
      result = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    } else {
      playerWin++
      result = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    }
  }
}

document.querySelectorAll("button").forEach(el => {
  el.addEventListener("click", e => {
    const playerSelection = e.currentTarget.id
    const computerSelection = computerPlay()
    playerSelectionDisplay.textContent = playerSelection
    computerSelectionDisplay.textContent = computerSelection
    playRound(playerSelection, computerSelection)
    resultDisplay.textContent = result
    playerScore.textContent = playerWin
    computerScore.textContent = computerWin
    if (playerWin === 5 || computerWin === 5) {
      modal.style.display = "flex"
    }

    if (playerWin === 5) {
      message.textContent = "Yay! You win."
    } else {
      message.textContent = "Oops! You lose."
    }
  })
});

document.querySelector(".modal__close").addEventListener("click", () => window.location.reload())

