import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return(
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand">Top Séries</a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink to="/series" className="nav-link" activeClassName="active">Series</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/favoris" className="nav-link">Favoris</NavLink>
                    </li>
                </ul>
            </div>
        </header>
        )
    }
}