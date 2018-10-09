import AuthServices from '../services/authServices'
import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILED
} from './actionsTypes'

export const authActions = {
    login,
    verifyAuth
}

function login(username, password) {
    return async dispatch => {
        let authServices = new AuthServices()

        dispatch(sendingRequest())

        try {
            let authResponse = await authServices.login(username, password)
            
            dispatch(userLoggedIn(authResponse.user.getIdToken()))
        } catch (err) {
            dispatch(userLoggedOut('Usuário ou senha inválidos'))
        }
    }
}

function verifyAuth() {
    return async dispatch => {
        dispatch(sendingRequest())

        const authServices = new AuthServices()
        const user = await authServices.validate()

        if (user) dispatch(userLoggedIn(user.getIdToken))
        else dispatch(userLoggedOut(''))
    }
}

function sendingRequest() { return { type: AUTH_LOGIN_REQUEST } }
function userLoggedIn(token) { return { type: AUTH_LOGIN_SUCCESS, token } }
function userLoggedOut(error) { return { type: AUTH_LOGIN_FAILED, error } }