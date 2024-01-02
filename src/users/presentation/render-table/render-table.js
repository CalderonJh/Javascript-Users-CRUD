import './render-table.css'
import userStore from "../../store/user-store.js";

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

/**
 *
 * @param {HTMLDivElement} element
 * @constructor
 */
export const RenderTable = ( element ) => {
    const users = userStore.getUsers();
    if (!table) {
        table = createTable();
        element.append(table);

        // todo listeners
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
                <a href="#/" data-id="${user.id}">Select</a>
                |
                <a href="#/" data-id="${user.id}">Delete</a>
             </td> 
            </tr>
        `;

    })

    table.querySelector('tbody').innerHTML = tableHTML;


}