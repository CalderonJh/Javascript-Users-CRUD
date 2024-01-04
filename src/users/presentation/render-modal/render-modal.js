import modalHtmlCode from './render-modal.html?raw';
import './render-modal.css';
import { saveUser } from '../../use-cases/save-user.js'
import { hideModal } from "./render-modal-events.js";

export let modal;
export let form;
let loadedUser = {};


/**
 * @param {HTMLDivElement} element
 */
export const RenderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtmlCode;
    modal.classList.add("modal-container", "hidden-modal");

    form = modal.querySelector('form')

    // hide the modal if clicks out of the form
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-container')) hideModal();
    })

    // to save a new user created or updated.
    form.addEventListener('submit', async (evt) => {
        evt.preventDefault();

        // formData looks like key-value pairs with all the form data.
        const formData = new FormData(form);

        // assigns off to the checkbox if isActive is false, because it might not be saved in the server.
        if (!formData.get('isActive')) formData.append('isActive', 'off');

        // The userLike object will be used to save the user attributes given by the form.
        const userLike = {
            ...loadedUser,
            avatar: "https://placehold.it/32x32",
        };

        // this loop assigns the form data to the object.
        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = Number(value);
                continue;
            }
            if (key === 'isActive') {
                userLike[key] = value === 'on';
                continue;
            }
            userLike[key] = value;
        }

        // The saveUser function determines whether to run a post or patch method.
        // Callback is necessary to not return without hiding the modal.
        await saveUser(userLike);
        form?.reset();
    });
    element.append(modal);
};

export const setLoadedUser = (newValue)=>{
    loadedUser = newValue;
}