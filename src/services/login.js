import config from 'config.json';

const getUserInfo = (jwt) => {
    const ENDPOINT = `${config.apiUrl}users/me`
    return fetch(ENDPOINT, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwt}`
        },
    }).then(res => {
        if (!res.ok) throw (res)
        return res.json()
    })
}

export default function login({ email, password }) {
    const ENDPOINT = `${config.apiUrl}auth/log-in`
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    }).then(res => {
        if (!res.ok) throw (res)
        return res.json()
    }).then((res) => {
        return getUserInfo(res.accessToken).then((userInfo) => ({
            id: userInfo.id,
            name: userInfo.name,
            surname: userInfo.surname,
            email: userInfo.email,
            jwt: res.accessToken
        })).catch(() => ({
            jwt: res.accessToken
        }))
    })
}