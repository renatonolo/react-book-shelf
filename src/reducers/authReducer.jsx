import { 
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILED
} from '../actions/actionsTypes'

const initialState = {
    loading: false,
    loggedIn: false,
    token: null,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AUTH_LOGIN_FAILED:
            return {
                ...initialState,
                error: action.error
            }
        case AUTH_LOGIN_SUCCESS:
            return {
                ...initialState,
                loggedIn: true,
                token: action.token
            }
    }
    
    return state;
}

export default authReducer