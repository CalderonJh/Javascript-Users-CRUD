import {localhostToUserMapper} from "../mappers/localhost-to-user.mapper.js";

/**
 * @param {string} id
 * @returns {Promise<UserModel>}
 */
export const getUserById = async (id ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const localhostUser = await res.json();

    return localhostToUserMapper(localhostUser);
}
