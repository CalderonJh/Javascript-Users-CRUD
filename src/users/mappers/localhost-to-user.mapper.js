import {UserModel} from "../models/user.model.js";

/**
 *
 * @param localhostUser
 * @returns {UserModel}
 */
export const localhostToUserMapper = (localhostUser) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender
    } = localhostUser;

    return new UserModel({
        id,
        isActive,
        balance,
        avatar,
        firstName:first_name,
        lastName:last_name,
        gender
    })
}