const computerChoiceDisplay = document.getElementById('computer-choice'); //selects element with a certain ID
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button'); //represents all the different allowed choices in the game
let userChoice //current user choice
let computerChoice //current computer choice

possibleChoices.forEach(possibleChoice => { //Add these properties to each button. For each different button representing a choice add event listeners
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id //Get's user choice after pressing a certain button and saves it. Current user choice is set to the event's button id that got triggered
        userChoiceDisplay.innerHTML = userChoice //Update user's choice display with its choice. User choice display is set to the triggered button's id
        generateComputerChoice() //generate computer's choice right after player
        getResult() //get result after both user choice and computer choice are ready
    })
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //Generate a random number which will indicate a random option for computerChoice. Math.random() returns a pseudo-random number which is less than or equal to zero, we multiply it by the maximum value we want it to return and floor it so we get an integer (we also sum 1 because index 0 is counted)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice ='scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() { // Game rules. Based on both user choice and computer choice determine if user wins or loses
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = 'Draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'You Lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') { 
        resultDisplay.innerHTML = 'You Win!'
    }
}