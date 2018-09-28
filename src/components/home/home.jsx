import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'

class Home extends React.Component {
    constructor() {
        super()
        
        this.state = {
            user: null,
        };
        this.db = null
        this.initFirebase()
    }

    initFirebase() {
        var config = {
            apiKey: "AIzaSyDqH63kvCMZSpPFCE-DHh4QEnn-7FV6CTU",
            authDomain: "bookshelf-651d3.firebaseapp.com",
            databaseURL: "https://bookshelf-651d3.firebaseio.com",
            projectId: "bookshelf-651d3"
        }

        firebase.initializeApp(config)
        this.db = firebase.database()
        // this.saveData()
        this.getData()
    }

    saveData() {
        this.db.ref('/users/renatonolo').set({
            username: 'renatonolo',
            email: 'renatonolo@hotmail.com',
            profile_picture: 'https://media-cdn.tripadvisor.com/media/photo-s/01/84/d9/c6/floralis-generica.jpg'
        })
    }

    async getData() {
        this.db.ref('/users/renatonolo').once('value').then((snapshot) => {
            this.setState({
                user: snapshot.val()
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>username: {this.state.user && this.state.user.username}</p>
                <Link to="/about">About this page</Link>
            </div>
        )
    }
}

export default Home