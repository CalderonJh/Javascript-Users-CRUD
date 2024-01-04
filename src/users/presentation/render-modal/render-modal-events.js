import { getUserById } from "../../use-cases/get-user-by-id.js";
import { modal, form, setLoadedUser } from "./render-modal.js"



export const showModal =  () => { modal?.classList.remove("hidden-modal") }


export const hideModal = () => {
    form?.reset();
    modal?.classList.add("hidden-modal")
}


/**
 * @param {string} id of the user to be updated.
 */
export const showModalToUpdateUser = async ( id ) => {
    const user = await getUserById(id);
    setLoadedUser(user);
    setFormValues(user);
    showModal();
}


/**
 * @param {UserModel} user
 */
const setFormValues = ( user ) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
}
