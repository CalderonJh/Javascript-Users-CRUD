import { UserModel } from "../models/user.model.js";
import { userToLocalhostMapper } from "../mappers/user-to-localhost.mapper.js";
import { postUser } from './post-user.js'
import { patchUser } from './patch-user.js'
import { hideModal } from "../presentation/render-modal/render-modal-events.js";
import UserStore from "../store/user-store.js";


/**
 *
 * @param str fields to be checked.
 * @returns {boolean} true if at least one of the args is not defined.
 */
const undefinedField = (...str) => str.some(s => !s || s.trim() === '');


/**
 * Takes an object that looks like a UserModel and determines whether to run a post or patch method
 * depending on whether the user ID has already been declared.
 * @param {Object} userLike must have some UserModel attributes.
 */
export const saveUser = async ( userLike) => {
    if (undefinedField(userLike.firstName, userLike.lastName)) throw 'Full name must be declared!';

    const user = new UserModel(userLike);

    // maps the given user to a valid one for the server.
    const userToSave = userToLocalhostMapper(user);
    if (userToSave.id) await patchUser(userToSave)
        else await postUser(userToSave);
    await UserStore.onUserChanged(user);
    hideModal();
}