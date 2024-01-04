

export const postUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}