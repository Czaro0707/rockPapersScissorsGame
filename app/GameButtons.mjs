import { Game } from "./Game.mjs";

const PAPER = document.querySelector(".game__paper");
const SCISSORS = document.querySelector(".game__scissors");
const ROCK = document.querySelector(".game__rock");

export const GAME = document.querySelector(".game");

export const ELEMENTS = [PAPER, SCISSORS, ROCK];

class GameButtons {
  constructor(paper, scissors, rock, elements) {
    this.paper = paper;
    this.scissors = scissors;
    this.rock = rock;
    this.elements = elements;
  }
  init() {
    this.elements.forEach((element) => {
      element.addEventListener("click", (e) => {
        this.playGame(e);
      });
    });
  }

  playGame(e) {
    let chosenElement = e.target;
    if (chosenElement.classList.contains("game__button__img")) {
      chosenElement = e.target.parentNode;
    }
    const game = new Game(chosenElement);
    game.makeGame();
  }
}

export const gameButtons = new GameButtons(PAPER, SCISSORS, ROCK, ELEMENTS);
