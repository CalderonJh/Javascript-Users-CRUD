

/**
 *
 * @returns {Promise<void>}
 */
export const patchUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
