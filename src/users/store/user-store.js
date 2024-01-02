import { loadUsersByPage } from "../use-cases/load-users-by-page.js";


const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    // console.log(users)
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviewPage = () => {

}

const onUserChanged = () => {

}

const reloadPage = async () => {

}

export default {
    loadNextPage,
    loadPreviewPage,
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