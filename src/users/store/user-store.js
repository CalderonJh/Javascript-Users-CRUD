import { loadUsersByPage } from "../use-cases/load-users-by-page.js";
import {RenderTable} from "../presentation/render-table/render-table.js";


const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async () => {
    if (state.currentPage === 1) return;

    state.users =  await loadUsersByPage(state.currentPage - 1);
    state.currentPage -= 1;
}

const onUserChanged = async (updatedUser) => {
    let wasFound = false;

    state.users = state.users.map( user => {
        if (user.id === updatedUser.id){
            wasFound = true;
            return updatedUser;
        }
        return user;
    })

    if (state.users.length < 10 && !wasFound ) state.users.push(updatedUser);

    location.reload();
}

const reloadPage = async () => {
    const users = await loadUsersByPage( state.currentPage );
    if ( users.length === 0 ) {
        await loadPreviousPage();
        return;
    }

    state.users = users;
    RenderTable();
}

export default {
    loadNextPage,
    loadPreviewPage: loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * @returns {UserModel[]}
     */
    getUsers: () => [...state.users],

    /**
     * @returns {number}
     */
    getCurrentPage: () => state.currentPage,
}