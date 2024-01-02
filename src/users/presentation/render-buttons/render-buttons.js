import './render-buttons.css';
import userStore from "../../store/user-store.js";
import {RenderTable} from "../render-table/render-table.js";

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

    element.append(buttonPrev, labelCurrentPage, buttonNext)

    // events

    buttonNext.addEventListener('click', async () => {
        await userStore.loadNextPage();
        labelCurrentPage.innerText = userStore.getCurrentPage().toFixed();
        RenderTable(element)
    });

    buttonPrev.addEventListener('click', async ()=>{
        await userStore.loadPreviewPage();
        labelCurrentPage.innerText = userStore.getCurrentPage().toFixed();
        RenderTable(element);
    })

}
