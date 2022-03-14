import { ELEMENTS, GAME } from "./GameButtons.mjs";

let playerChoice = null;
let computerChoice = null;

let PLAYERDESCRIPTION = null;

class GameStats {
  constructor(score, againModal, againDescription, againButton) {
    this.score = score;
    this.againModal = againModal;
    this.number = 0;
    this.againDescription = againDescription;
    this.againButton = againButton;
  }
  init() {
    this.score.textContent = this.number;
    this.againButton.addEventListener("click", () => {
      this.makeGameAgain();
    });
  }

  playerWin() {
    this.number++;
    this.score.textContent = this.number;
    this.againDescription.textContent = "you win";
  }

  playerLose() {
    this.number--;
    this.score.textContent = this.number;
    this.againDescription.textContent = "you loose";
  }

  playerDraw() {
    this.againDescription.textContent = "you draw";
  }

  makeModalVisble() {
    this.againModal.classList.remove("notVisible");
    playerChoice = document.querySelector(".rightMargin");
    computerChoice = document.querySelector(".leftMargin");
    PLAYERDESCRIPTION = document.querySelector(
      ".game__button__playerDescription"
    );
    if (this.againDescription.textContent === "you win") {
      playerChoice.classList.add("winner");
    } else if (this.againDescription.textContent === "you loose") {
      computerChoice.classList.add("winner");
    }
  }

  makeGameAgain() {
    this.againModal.classList.add("notVisible");
    playerChoice.classList.remove("game__button__enabled");
    playerChoice.classList.remove("rightMargin");
    playerChoice.classList.remove("winner");
    ELEMENTS.forEach((element) => {
      element.classList.remove("game__button__disabled");
    });
    GAME.classList.remove("game--enabled");

    PLAYERDESCRIPTION.remove();
    computerChoice.remove();
  }
}

export const gameStats = new GameStats(
  document.querySelector(".board__result__score"),
  document.querySelector(".game__end"),
  document.querySelector(".game__end__description"),
  document.querySelector(".game__end__button")
);
