import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Menu from './Menu'
import DashBoard from './Dashboard'
import TamagotchiNew from './tamagotchis/TamagotchiNew';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();

    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={DashBoard}/>
                        <Route exact path="/tamagotchi" component={Menu}/>
                        <Route path="/tamagotchi/new" component={TamagotchiNew}/>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);