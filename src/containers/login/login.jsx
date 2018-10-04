import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { authActions } from '../../actions'
import './Login.scss'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        autoBind(this)
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.auth.loggedIn) BrowserRouter.push('/dashboard')
    // }

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

    handleSubmit(e) {
        e.preventDefault()

        const { username, password } = this.state
        const { dispatch } = this.props

        if (username && password)
            dispatch(authActions.login(username, password))
    }

    handleFacebookLogin() {
        console.log('handleFacebookLogin')
    }

    render() {
        const redirectToReferrer = this.props.auth.loggedIn;

        if (redirectToReferrer) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="bs_login">
                <div></div>
                <div>
                    <div>
                        <h1>React Book Shelf</h1>
                        {this.props.auth.loading && 'Loading...'}
                        {this.props.auth.error}
                        <form name="form" onSubmit={this.handleSubmit}>
                            <label>Username: </label><input type="text" onChange={this.usernameChanged} />
                            <label>Password: </label><input type="password" onChange={this.passwordChanged} />
                            <button>Login</button>
                        </form>
                        <button onClick={this.handleFacebookLogin}>Login com facebook</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { auth } = state;
    return { auth }
}

export default connect(mapStateToProps)(Login)
