const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.textContent = "Match was Draw, Try again";
    msg.className = "draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    msg.className = userWin ? "win" : "lose";
    if(userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        msg.textContent = `you win. your ${userChoice} beats ${compChoice}`;
    }else{
        compScore++;
        compScorePara.textContent = compScore;
        msg.textContent = `you lose. ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});