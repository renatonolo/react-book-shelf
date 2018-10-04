import firebase from 'firebase'

export default class AuthServices {

    async login(username, password) {
        const authPersistence = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

        return firebase.auth().signInWithEmailAndPassword(username, password)
    }

    validate() {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(function(user) {
                return resolve(user)
            })
        })
    }
}