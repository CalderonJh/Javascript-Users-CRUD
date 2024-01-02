import userStore from "./store/user-store";
import { RenderTable } from "./presentation/render-table/render-table.js";
import { RenderButtons } from "./presentation/render-buttons/render-buttons.js";


export const UsersApp = async (element) => {
    // element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    console.log('log ', userStore.getUsers());

    RenderTable(element);

    RenderButtons(element)
}