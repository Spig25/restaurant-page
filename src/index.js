import homePage from "./initial";
import menu from "./menu";
import contact from "./contact";
import "./style.css";

homePage()

const homeButton = document.querySelector(`.home`)
const menuButton = document.querySelector(`.menu`)
const contactButton = document.querySelector(`.contact`)

homeButton.addEventListener(`click`, () => {
    homePage()
})

menuButton.addEventListener(`click`, () => {
    menu()
})

contactButton.addEventListener(`click`, () => {
    contact()
})