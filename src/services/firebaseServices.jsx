import * as firebaseApp from 'firebase/app';

export default class FirebaseServices {
    static initializeFirebaseApp() {
        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        var config = {
            apiKey: "AIzaSyDqH63kvCMZSpPFCE-DHh4QEnn-7FV6CTU",
            authDomain: "bookshelf-651d3.firebaseapp.com",
            databaseURL: "https://bookshelf-651d3.firebaseio.com"
        }

        firebaseApp.initializeApp(config)
    }
}