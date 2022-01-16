const choices = ["rock", "paper", "scissors"];

const computerPlay = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const playerPlay = (buttonID) => {
  return buttonID;
};

let scoreArr = [0, 0];

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const playerSelection = playerPlay(button.id);
    const computerSelection = computerPlay(choices);

    if (!isGameOver(scoreArr)) {
      clear("result");
      clear("score");
      playRound(playerSelection, computerSelection);
    }
    if (isGameOver(scoreArr)) {
      if (scoreArr[0] > scoreArr[1]) {
        updateBoard("You win the 5 game series!", "round", "result");
        clear("result");
        clear("score");
        resetScore(scoreArr);
      } else {
        updateBoard("You lost the 5 game series!", "round", "result");
        clear("result");
        clear("score");
        resetScore(scoreArr);
      }
    }
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

  updateBoard(
    outputRoundString(outcome, playerSelection, computerSelection),
    "round",
    "result"
  );
  updateScore(outcome, scoreArr);
  updateBoard(outputScoreString(scoreArr), "scoreboard", "score");
  return outcome;
};

const isGameOver = (score) => {
  return score[0] >= 5 || score[1] >= 5 ? true : false;
};

const updateScore = (outcome, score) => {
  return outcome === "tie"
    ? score
    : outcome === "win"
    ? (score[0] += 1)
    : (score[1] += 1);
};

const resetScore = (scoreArr) => {
  scoreArr[0] = 0;
  scoreArr[1] = 0;
  return scoreArr;
};

const updateBoard = (string, parentID, childID) => {
  const scoreBoard = document.querySelector(`#${parentID}`);
  const score = document.createElement("h2");
  score.textContent = string;
  score.setAttribute("id", childID);
  scoreBoard.appendChild(score);
};

const clear = (id) => {
  const elemToRemove = document.querySelector(`#${id}`);
  if (elemToRemove) {
    elemToRemove.parentNode.removeChild(elemToRemove);
  }
};

const outputScoreString = (score) => {
  return `SCORE\nPlayer: ${score[0]} -- Computer: ${score[1]}`;
};

const outputRoundString = (outcome, playerSelection, computerSelection) => {
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
