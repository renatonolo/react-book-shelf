import React, { Component } from 'react'
import autoBind from 'react-autobind';

import './Login.scss';

export default class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }

        autoBind(this)
    }

    usernameChanged(event) {
        this.setState({
            username: event.target.value
        })
    }

    passwordChanged(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleClick() {
        console.log(this.state)
    }

    render() {
        return (
            <div className="bs_login">
                <div></div>
                <div>
                    <div>
                        <h1>React Book Shelf</h1>
                        <label>Username: </label><input type="text" onChange={this.usernameChanged} />
                        <label>Password: </label><input type="password" onChange={this.passwordChanged} />
                        <button onClick={this.handleClick}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}
