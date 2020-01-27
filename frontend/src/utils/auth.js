import Cookies from 'js-cookie'

const TOKEN_KEY = 'AUTH-TOKEN'
const USER_ROLE = 'USER-ROLE'
const USER_AUTH_STATUS = 'AUTH-STATUS'

export function getToken(){
    return Cookies.get(TOKEN_KEY)
}

export function getUserRole(){
    return Cookies.get(USER_ROLE)
}

export function getUserStatus(){
    return Cookies.get(USER_AUTH_STATUS)
}

export function setToken(token){
    return Cookies.set(TOKEN_KEY, token)
}

export function deleteToken(){
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(USER_AUTH_STATUS);
    Cookies.remove(USER_ROLE);
}