import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Detail extends Component {
    render() {
        return (
            <div>
                <NavLink to="/garage">
                    <button>Submit</button>
                </NavLink>
            </div>
        )
    }
}
