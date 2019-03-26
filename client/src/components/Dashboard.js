import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {

    renderContent(){


        if(this.props.auth){
            switch (this.props.tamagotchi) {
                case false:
                    return<Link to="/tamagotchi/new">
                        NEW
                    </Link>;

                default:
                    return <div>
                        <span className="tamagotchi-name"> Name:{this.props.tamagotchi.name}</span><br></br>
                        Meals:{this.props.tamagotchi.meals}<br></br>
                        Pets:{this.props.tamagotchi.pets}<br></br>
                        Status:{this.props.tamagotchi.status}<br></br>
                        Clean Up:{this.props.tamagotchi.poops}<br></br>
                        <img src={this.props.tamagotchi.assetUrl}></img>
                        <button onClick={() => this.props.feedTamagotchi(this.props.tamagotchi)} >feed</button>
                        <button onClick={() => this.props.petTamagotchi(this.props.tamagotchi)} >pet</button>
                        <button onClick={() => this.props.cleanTamagotchi(this.props.tamagotchi)} >clean up</button>

                    </div>
            }
        }


    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }


}

function mapStateToProps({ tamagotchi, auth }) {
    console.log("map state")
    console.log(tamagotchi)
    return { tamagotchi: tamagotchi,
    auth: auth};
}



export default connect(mapStateToProps, actions)(Dashboard);