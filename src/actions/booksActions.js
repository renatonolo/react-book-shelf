import { 
    BOOKS_REQUEST,
    BOOKS_MY_FOUND,
    BOOKS_MY_ADDED,
    BOOKS_FAILED
 } from './actionsTypes'
import BooksServices from '../services/booksServices'

function myBooks() {
    return async dispatch => {
        const booksServices = new BooksServices()
        
        dispatch(sendingRequest())

        try {
            const books = await booksServices.myBooks()
            const myBooks = (books == null) ? [] : books
            
            dispatch(myBooksFound(myBooks))
        } catch (err) {
            console.log(err)
            dispatch(booksFailed())
        }
    }
}

function addNew(name, description) {
    return async dispatch => {
        const booksServices = new BooksServices()

        dispatch(sendingRequest())

        try {
            const book = {
                name: name,
                description: description
            }
            const key = await booksServices.add(book)
            
            book.key = key
            dispatch(myBooksAdded(book))
        } catch(err) {
            console.log(err)
            dispatch(booksFailed)
        }
    }
}

function remove(key) {
    return async dispatch => {
        const booksServices = new BooksServices()

        dispatch(sendingRequest)

        try {
            const removed = await booksServices.remove(key)
            if(removed) dispatch(myBooks())
            else dispatch(booksFailed())
        } catch(err) {
            console.log(err)
            dispatch(booksFailed)
        }
    }
}

function sendingRequest() { return { type: BOOKS_REQUEST } }
function myBooksAdded(book) { return { type: BOOKS_MY_ADDED, book: book } }
function myBooksFound(books) { return { type: BOOKS_MY_FOUND, myBooks: books } }
function booksFailed() { return { type: BOOKS_FAILED } }

export const booksActions = {
    myBooks,
    addNew,
    remove
}