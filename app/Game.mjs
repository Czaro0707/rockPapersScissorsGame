import { ELEMENTS, GAME } from "./GameButtons.mjs";

import { gameStats } from "./GameStats.mjs";

export class Game {
  constructor(playerChoice) {
    this.playerChoice = playerChoice;
    this.computerChoice = document.createElement("div");
  }

  makeGame() {
    this.changeGameProperties();
    this.clearElements();
    this.createDescriptions();
    this.createComputerEmptySpace();
  }

  changeGameProperties() {
    GAME.classList.add("game--enabled");
  }

  clearElements() {
    ELEMENTS.forEach((element) => {
      element.classList.add("game__button__disabled");
    });
    this.playerChoice.classList.remove("game__button__disabled");
    this.playerChoice.classList.add("game__button__enabled");
    this.playerChoice.classList.add("rightMargin");
  }

  createComputerEmptySpace() {
    this.computerChoice.classList.add("game__button");
    this.computerChoice.classList.add("game__button__enabledComputer");
    this.computerChoice.classList.add("leftMargin");
    GAME.appendChild(this.computerChoice);
    setTimeout(() => {
      this.createComputerChoice(ELEMENTS);
      this.checkWin();
    }, 1000);
  }

  createDescriptions() {
    const playerDiv = document.createElement("div");
    playerDiv.textContent = "You picked";
    playerDiv.classList.add("game__button__playerDescription");

    const computerDiv = document.createElement("div");
    computerDiv.textContent = "The House Picked";
    computerDiv.classList.add("game__button__computerDescription");

    this.playerChoice.appendChild(playerDiv);
    this.computerChoice.appendChild(computerDiv);
  }

  genereateImg(classImg) {
    const img = document.createElement("img");
    img.classList.add("game__button__img");
    if (classImg === "game__paper") {
      img.setAttribute("src", "./images/icon-paper.svg");
    } else if (classImg === "game__rock") {
      img.setAttribute("src", "./images/icon-rock.svg");
    } else if (classImg === "game__scissors") {
      img.setAttribute("src", "./images/icon-scissors.svg");
    }
    this.computerChoice.appendChild(img);
  }

  createComputerChoice(elements) {
    const index = Math.floor(Math.random() * 3);
    const computerChoice = elements[index];
    const computerChoiceClassList = computerChoice.classList;
    const computerChoiceActualClass = computerChoiceClassList[0];
    this.computerChoice.classList.remove("game__button__enabledComputer");
    this.computerChoice.classList.add(computerChoiceActualClass);
    this.computerChoice.classList.add("game__button__enabled");
    this.genereateImg(computerChoiceActualClass);
  }

  checkWin() {
    // Wybranie papieru
    if (
      this.playerChoice.classList.contains("game__paper") &&
      this.computerChoice.classList.contains("game__rock")
    ) {
      gameStats.playerWin();
    } else if (
      this.playerChoice.classList.contains("game__paper") &&
      this.computerChoice.classList.contains("game__scissors")
    ) {
      gameStats.playerLose();
    } else if (
      this.playerChoice.classList.contains("game__paper") &&
      this.computerChoice.classList.contains("game__paper")
    ) {
      gameStats.playerDraw();
    }

    // Wybranie kamienia
    if (
      this.playerChoice.classList.contains("game__rock") &&
      this.computerChoice.classList.contains("game__scissors")
    ) {
      gameStats.playerWin();
    } else if (
      this.playerChoice.classList.contains("game__rock") &&
      this.computerChoice.classList.contains("game__paper")
    ) {
      gameStats.playerLose();
    } else if (
      this.playerChoice.classList.contains("game__rock") &&
      this.computerChoice.classList.contains("game__rock")
    ) {
      gameStats.playerDraw();
    }

    // Wybranie nożyczek
    if (
      this.playerChoice.classList.contains("game__scissors") &&
      this.computerChoice.classList.contains("game__paper")
    ) {
      gameStats.playerWin();
    } else if (
      this.playerChoice.classList.contains("game__scissors") &&
      this.computerChoice.classList.contains("game__rock")
    ) {
      gameStats.playerLose();
    } else if (
      this.playerChoice.classList.contains("game__scissors") &&
      this.computerChoice.classList.contains("game__scissors")
    ) {
      gameStats.playerDraw();
    }

    gameStats.makeModalVisble();
  }
}
