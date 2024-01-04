import './render-add-button.css';
import {showModal} from "../render-modal/render-modal-events.js";


/**
 *
 * @param {HTMLDivElement} element
 */
export const RenderAddButton = ( element ) => {
    const buttonFab = document.createElement("button");
    buttonFab.innerText = 'Add';
    buttonFab.classList.add('fab__button');

    element.append(buttonFab)
    buttonFab.addEventListener('click', showModal)

}