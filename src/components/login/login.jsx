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
                    Username: <input type="text" onChange={this.usernameChanged}/>
                    Password: <input type="password" onChange={this.passwordChanged}/>
                    <button onClick={this.handleClick}>Login</button>
                </div>
            </div>
        )
    }
}
