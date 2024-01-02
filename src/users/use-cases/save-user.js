import {UserModel} from "../models/user.model.js";
import {userToLocalhostMapper} from "../mappers/user-to-localhost.mapper.js";


const postUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log('new user: ', newUser);
}

const undefinedField = (...str) => str.some(s => !s || s.trim() === '');


export const saveUser = async ( userLike , hideModal) => {
    const user = new UserModel(userLike)
    if (undefinedField(userLike.firstName, userLike.lastName))
        throw 'Uno de los campos no está definido'

    const userToSave = userToLocalhostMapper(user);
    if(user.id) throw 'Update is not implemented yet';
    await postUser(userToSave)
    hideModal();
}