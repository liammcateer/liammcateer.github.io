import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="side-nav">
                    <nav className="main-nav">
                        <NavLink exact to="/" className="nav-item" activeClassName="active-page">
                            <i className="fas fa-home"></i><br/>
                            <span>Home</span>
                        </NavLink>
                        <NavLink exact to="/about" className="nav-item" activeClassName="active-page">
                            <i className="fas fa-user"></i><br/>
                            <span>About</span>
                        </NavLink>
                        <NavLink exact to="/portfolio" className="nav-item" activeClassName="active-page">
                            <i className="fas fa-code"></i><br/>
                            <span>Portfolio</span>
                        </NavLink>
                        <NavLink exact to="/contact" className="nav-item" activeClassName="active-page">
                            <i className="fas fa-envelope"></i><br/>
                            <span>Contact</span>
                        </NavLink>
                    </nav>
                    <nav className="social-nav">
                        <a href="https://github.com/liammcateer/" target="_blank" className="social-item">
                            <i className="fab fa-github"></i><br/>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/liammcateer/" target="_blank" className="social-item">
                            <i className="fab fa-linkedin-in"></i><br/>
                            <span>LinkedIn</span>
                        </a>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation
