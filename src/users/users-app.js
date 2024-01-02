import userStore from "./store/user-store";
import { RenderTable } from "./presentation/render-table/render-table.js";
import { RenderButtons } from "./presentation/render-buttons/render-buttons.js";
import { RenderAddButton } from "./presentation/render-add-button/render-add-button.js";
import { RenderModal, showModal } from "./presentation/render-modal/render-modal.js";
import {saveUser} from './use-cases/save-user.js'

export const UsersApp = async (element) => {
    // element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    // console.log('log ', userStore.getUsers());

    RenderTable(element);

    RenderButtons(element);

    RenderAddButton(element, showModal);

    RenderModal(element, saveUser);

}