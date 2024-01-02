import {localhostToUserMapper} from "../mappers/localhost-to-user.mapper.js";

export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();

    return  data.map(localhostToUserMapper)
}
