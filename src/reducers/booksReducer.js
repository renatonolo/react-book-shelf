import {
    BOOKS_REQUEST, 
    BOOKS_MY_FOUND,
    BOOKS_MY_ADDED
} from '../actions/actionsTypes'

const initialState = {
    loading: false,
    newBookAdded: false,
    myBooks: []
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                newBookAdded: false
            }
        case BOOKS_MY_FOUND:
            return {
                ...initialState,
                myBooks: action.myBooks,
                newBookAdded: false
            }
        case BOOKS_MY_ADDED:
            let myBooks = state.myBooks
            myBooks.push(action.book)

            return {
                ...state,
                myBooks: myBooks,
                loading: false,
                newBookAdded: true
            }
        default:
            return initialState
    }
}

export default booksReducer