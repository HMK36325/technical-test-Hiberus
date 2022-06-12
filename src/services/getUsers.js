import config from 'config.json';

export default function getUsers({ currentUser }) {
    const ENDPOINT = `${config.apiUrl}users`
    return fetch(ENDPOINT, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.jwt}`
        }
    }).then(res => {
        if (!res.ok) throw (res)
        return res.json()
    })
}