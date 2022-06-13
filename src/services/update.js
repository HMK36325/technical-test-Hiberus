import config from 'config.json';

export default function update({ userToUpdate, jwt }) {
    const ENDPOINT = `${config.apiUrl}users/${userToUpdate.id}`
    return fetch(ENDPOINT, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify(userToUpdate)
    }).then(res => {
        if (!res.ok) throw (res)
        return res.json();
    })
}