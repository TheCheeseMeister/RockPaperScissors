function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const rock = new RegExp("^rock$", 'i');
    const paper = new RegExp("^paper$", 'i');
    const scissors = new RegExp("^scissors$", 'i');

    let choice = prompt("Choose your action (Rock, Paper, or Scissors): ");

    if (rock.test(choice) || paper.test(choice) || scissors.test(choice)) {
        if (rock.test(choice)) {
            return "Rock";
        } else if (paper.test(choice)) {
            return "Paper";
        } else if (scissors.test(choice)) {
            return "Scissors";
        }
    } else {
        while (true) {
            choice = prompt("Please spell your choice correctly (Rock, Paper, or Scissors): ");
            
            if (rock.test(choice)) {
                return "Rock";
            } else if (paper.test(choice)) {
                return "Paper";
            } else if (scissors.test(choice)) {
                return "Scissors";
            }
        }
    }
}

function playRound(humanChoice, computerChoice) {
    // 0 - Rock, 1 - Paper, 2 - Scissors
    const comparison = {
        Rock: {weakTo: "Paper", strongTo: "Scissors"},
        Paper: {weakTo: "Scissors", strongTo: "Rock"},
        Scissors: {weakTo: "Rock", strongTo: "Paper"}
    }

    if (comparison[humanChoice].strongTo == computerChoice) {
        console.log("You Win! " + `${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        return;
    } else if (comparison[humanChoice].weakTo == computerChoice) {
        console.log("You Lose. " + `${humanChoice} loses to ${computerChoice}.`);
        computerScore++;
        return;
    } else {
        console.log("Oops! It's a tie. " + `Both are ${humanChoice}.`);
        return;
    }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function (e) {
    switch(e.target.getAttribute("id")) {
        case "rock":
            playRound("Rock", getComputerChoice());
            break;
        case "paper":
            playRound("Paper", getComputerChoice());
            break;
        case "scissors":
            playRound("Scissors", getComputerChoice());
            break;
    }
});