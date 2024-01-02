import modalHtmlCode from './render-modal.html?raw'
import './render-modal.css'


let modal;
let form;

export const showModal = () => {
    // todo: cargar usuario por id
    modal.classList.remove("hidden-modal");
}


export const hideModal = () => {
    modal.classList.add("hidden-modal");
}


/**
 * @param {HTMLDivElement} element
 * @param {function} saveUser
 */
export const RenderModal = (element, saveUser) => {
    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtmlCode;
    modal.classList.add("modal-container", "hidden-modal");

    form = modal.querySelector('form')

    modal.addEventListener('click', (event)=>{
        if (  event.target.classList.contains('modal-container')) hideModal();

    })

    form.addEventListener('submit', (evt)=>{
        evt.preventDefault();

        const formData = new FormData(form);
        const userLike = {
            'isActive':false
        }


        for (const [ key , value ] of formData) {
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
        console.log('user like ', userLike)

        saveUser(userLike, hideModal)
        // hideModal();
        form?.reset();
    })
    element.append(modal);
}