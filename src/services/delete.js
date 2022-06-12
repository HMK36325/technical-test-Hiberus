import config from 'config.json';

export default function deleteUser({ userId, jwt }) {
    const ENDPOINT = `${config.apiUrl}users/${userId}`
    
    return fetch(ENDPOINT, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => {
        if (!res.ok) throw (res)
        return true;
    })
}