import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthServices from '../../services/authServices';

export default class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            checked: false
        }
    }

    componentDidMount() {
        const authServices = new AuthServices()

        authServices.validate().then(user => {
            if (user)
                this.setState({
                    isLoggedIn: true,
                    checked: true
                })
            else
                this.setState({
                    isLoggedIn: false,
                    checked: true
                })
        }).catch(err => {
            this.setState({
                isLoggedIn: false,
                checked: true
            })
        })
    }

    render() {
        if (this.state.isLoggedIn)
            return <Route path={this.props.path} component={this.props.component}/>
        else if(!this.state.isLoggedIn && this.state.checked)
            return <Redirect to={{pathname: '/', state: { from: this.props.location }}} />
        else
            return null
    }
}