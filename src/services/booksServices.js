import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default class BooksServices {
    constructor() {

    }

    myBooksPath(user) {
        const uid = user.uid;
        return `users/${uid}/books`
    }

    async myBooks() {
        try {
            const user = firebase.auth().currentUser;
            if (user) {
                let out = [];
                const snapshot = await firebase.database().ref(this.myBooksPath(user)).once('value')
                snapshot.forEach(item => {
                    let book = item.val()
                    book.key = item.key
                    out.push(book)
                })

                return out
            } return null
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async add(book) {
        try {
            const user = firebase.auth().currentUser
            if (user) {
                const out = await firebase.database().ref(this.myBooksPath(user)).push(book)
                return out.key
            } else return null
        } catch (err) {
            console.log(err)
            return null
        }
    }

    async remove(key) {
        try {
            const user = firebase.auth().currentUser
            if (user) {
                await firebase.database().ref(this.myBooksPath(user) + `/${key}`).remove()
                return true
            } else return false
        } catch (err) {
            console.log(err)
            return false
        }
    }
}