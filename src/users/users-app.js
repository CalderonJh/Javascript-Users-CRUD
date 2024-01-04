import userStore from "./store/user-store";
import { RenderTable } from "./presentation/render-table/render-table.js";
import { RenderButtons } from "./presentation/render-buttons/render-buttons.js";
import { RenderAddButton } from "./presentation/render-add-button/render-add-button.js";
import { RenderModal } from "./presentation/render-modal/render-modal.js";

export const UsersApp = async (element) => {
    await userStore.loadNextPage();

    RenderTable(element);

    RenderButtons(element);

    RenderAddButton(element);

    RenderModal(element);

}