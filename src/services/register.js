import config from 'config.json';

export default function register({ name, surname, email, password }) {
    const ENDPOINT = `${config.apiUrl}auth/sign-up`
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, surname, email, password })
    }).then(res => {
        if (!res.ok) throw (res)
        return true;
    })
}