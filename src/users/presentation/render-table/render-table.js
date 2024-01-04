import './render-table.css'
import {showModalToUpdateUser} from "../render-modal/render-modal-events.js";
import {deleteUserById} from "../../use-cases/delete-user-by-id.js";
import UserStore from "../../store/user-store.js";


let table;

const createTable = () =>{
    const table = document.createElement("table");
    const tableHeaders = document.createElement("thead");
    tableHeaders.innerHTML = `
        <tr>
        <th>Id</th>
        <th>Balance</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Is Active</th>
        <th>Actions</th>  
        </tr>
    `;

    const tableBody = document.createElement("tbody")
    table.append(tableHeaders, tableBody);
    return table;
}

const selectListener = async (event) => {
    const element = event.target.closest('.select-user');
    if (!element) return;
    const id = element.getAttribute('data-id');
    await showModalToUpdateUser(id)
}


const deleteListener = async (event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;
    const id = element.getAttribute('data-id')
    try{
        await deleteUserById(id)
        await UserStore.reloadPage();
        document.querySelector('#current-page__label').innerText = UserStore.getCurrentPage();
    }catch (e) {
        alert(e);
    }
}


/**
 *
 * @param {HTMLDivElement} element
 * @constructor
 */
export const RenderTable = ( element ) => {
    const users = UserStore.getUsers();
    if (!table) {
        table = createTable();
        element.append(table);

        table.addEventListener('click', selectListener);
        table.addEventListener('click', deleteListener);
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
            <tr>
             <td>${user.id}</td>
             <td>${user.balance}</td>
             <td>${user.firstName}</td>
             <td>${user.lastName}</td>
             <td>${user.isActive}</td> 
             <td>
                <a href="#/" id="id__select-user" class="select-user" data-id="${user.id}">Select</a>
                |
                <a href="#/"  id="id__selected-user"  class="delete-user" data-id="${user.id}">Delete</a>
             </td> 
            </tr>
        `;

    })

    table.querySelector('tbody').innerHTML = tableHTML;

}