const RULESBUTTON = document.querySelector(".rules__button");
const MODALDESKTOP = document.querySelector(".modal__background");
const MODALPHONE = document.querySelector(".modal--phone");
const EXITBUTTONS = [...document.querySelectorAll(".modal__exit")]

class RulesButton {
    constructor(element, modalDesktop, modalPhone, exitButtons) {
        this.element = element
        this.modalDesktop = modalDesktop
        this.modalPhone = modalPhone
        this.exitButtons = exitButtons
    }
    init() {
        this.element.addEventListener("click", () => {
            this.showRules()
        })
        this.exitButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                this.exitRules(e)
            })
        })
    }
    showRules() {
        if (window.innerWidth > 1200) {
            this.modalDesktop.style.display = "block"
        } else {
            this.modalPhone.style.display = "flex"
        }
    }

    exitRules(e) {
        if (e.target.classList.contains("modal__exit--computer") || e.target.classList.contains("modal__exit--phone") || e.target.classList.contains("modal__exit__firstStick") || e.target.classList.contains("modal__exit__secondStick")) {
            this.modalDesktop.style.display = "none"
            this.modalPhone.style.display = "none"
        }
    }
}

export const rulesButton = new RulesButton(RULESBUTTON, MODALDESKTOP, MODALPHONE, EXITBUTTONS)