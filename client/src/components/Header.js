
import { Navbar } from 'react-bulma-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Header extends Component {

    renderContent(){
        switch (this.props.auth) {
            case null:
                return ;

            case false:
                return <a href="auth/google" className="navbar-item">Login with Google</a>;

            default:
                return <a className="navbar-item" href="/api/logout">Logout</a>;
        }
    }
    
    render() {
        return (
            <nav className="navbar">
                <div id="" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to={this.props.auth ? '/tamagotchi' : '/'} className="navbar-item">Tamagotchi</Link>

                        {this.renderContent()}
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}

export default connect(mapStateToProps )(Header);