import './render-buttons.css';
import userStore from "../../store/user-store.js";

/**
 *
 * @param {HTMLDivElement} element
 * @constructor
 */
export const RenderButtons = (element) => {
    const buttonNext = document.createElement('button');
    buttonNext.innerText = 'Next';


    const buttonPrev = document.createElement('button');
    buttonPrev.innerText = 'Prev';
    const labelCurrentPage = document.createElement("label");
    labelCurrentPage.id = 'current-page__label';
    labelCurrentPage.innerText = userStore.getCurrentPage().toFixed();

    element.append(buttonNext, labelCurrentPage, buttonPrev)

    // events

}
