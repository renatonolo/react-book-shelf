import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import { authActions } from '../actions'
import firebaseService from '../services/firebaseServices'

firebaseService.initializeFirebaseApp()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

store.dispatch(authActions.verifyAuth())

export default store