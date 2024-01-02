import './render-add-button.css';


/**
 *
 * @param {HTMLDivElement} element
 * @param {Function} addFunction
 * @constructor
 */
export const RenderAddButton = ( element, addFunction ) => {
    // console.log(addFunction)
    const buttonFab = document.createElement("button");
    buttonFab.innerText = 'Add';
    buttonFab.classList.add('fab__button');

    element.append(buttonFab)
    buttonFab.addEventListener('click', addFunction)

}