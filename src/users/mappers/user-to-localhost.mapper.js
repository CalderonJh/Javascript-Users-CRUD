/**
 *
 * @param {UserModel} user
 */
export const userToLocalhostMapper = (user) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        firstName,
        lastName,
        gender
    } = user;

    return {
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender
    }
}