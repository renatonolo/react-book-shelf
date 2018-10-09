import React, { Component } from 'react'

import './form.scss'

export const Form = props => (
    <form className="bs_form" style={props.style}>
            {props.children}
        </form>
)