const choices = ["rock", "paper", "scissors"];

const computerPlay = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const playerPlay = (buttonID) => {
  return buttonID;
};

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const playerSelection = playerPlay(button.id);
    const computerSelection = computerPlay(choices);
    console.log(
      `playerSelection: ${playerSelection}\ncomputerSelection: ${computerSelection}`
    );
    clearRoundResult("result");
    playRound(playerSelection, computerSelection);
  });
});

const playRound = (playerSelection, computerSelection) => {
  let outcome;
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      outcome = "tie";
    } else if (computerSelection === "paper") {
      outcome = "lose";
    } else if (computerSelection === "scissors") {
      outcome = "win";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      outcome = "win";
    } else if (computerSelection === "paper") {
      outcome = "tie";
    } else if (computerSelection === "scissors") {
      outcome = "lose";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      outcome = "lose";
    } else if (computerSelection === "paper") {
      outcome = "win";
    } else if (computerSelection === "scissors") {
      outcome = "tie";
    }
  }

  //console.log(outputString(outcome, playerSelection, computerSelection));
  updateRoundResult(outputString(outcome, playerSelection, computerSelection));
  return outcome;
};

const updateRoundResult = (string) => {
  const scoreBoard = document.querySelector("#score");
  console.log(scoreBoard);
  const score = document.createElement('h2');
  score.textContent = string;
  score.setAttribute("id", "result");
  console.log(score.textContent);
  scoreBoard.appendChild(score);
}

const clearRoundResult = (id) => {  
  const elemToRemove = document.querySelector(`#${id}`);
  if (elemToRemove) {elemToRemove.parentNode.removeChild(elemToRemove);} 
}

const outputString = (outcome, playerSelection, computerSelection) => {
  return outcome === "tie"
    ? `There was a tie because both players played ${capitalizeFirstLetter(
        playerSelection
      )}.`
    : outcome === "win"
    ? `You Win! ${capitalizeFirstLetter(
        playerSelection
      )} beats ${capitalizeFirstLetter(computerSelection)}.`
    : `You Lose! ${capitalizeFirstLetter(
        computerSelection
      )} beats ${capitalizeFirstLetter(playerSelection)}.`;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const roundSummary = (outcome, scoreArr) => {
  if (outcome === "tie") {
    return;
  } else if (outcome === "win") {
    scoreArr[0] += 1;
  } else if (outcome === "lose") {
    scoreArr[1] += 1;
  }
  return scoreArr;
};

const game = () => {
  let scoreArr = [0, 0];

  /*
  for (let i = 0; i < 5; i++) {
    playerSelection = playerPlay().toLowerCase();
    computerSelection = computerPlay(choices);
    console.log(`ROUND ${i + 1}`);
    roundSummary(playRound(playerSelection, computerSelection), scoreArr);
  }
  */

  /*
  if (scoreArr[0] === scoreArr[1]) {
    console.log("There was a tie!");
  } else if (scoreArr[0] < scoreArr[1]) {
    console.log(`The computer beat you by ${scoreArr[1] - scoreArr[0]}!`);
  } else if (scoreArr[0] > scoreArr[1]) {
    console.log(`You beat the computer by ${scoreArr[0] - scoreArr[1]}!`);
  }
  console.log(
    `The final score is\nplayer: ${scoreArr[0]} - computer: ${scoreArr[1]}`
  );
  */
};

//game();
