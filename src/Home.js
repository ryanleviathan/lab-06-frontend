import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <>
            <h1>
                Welcome to your dynamic garage!
            </h1>
            <h3>
                Click below and you'll be sent to your garage page.
            </h3>
            <NavLink to="/garage">
                <button>Continue</button>
            </NavLink>
            </>
        )
    }
}
