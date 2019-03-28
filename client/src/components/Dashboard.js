import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import * as actions from "../actions";
import { DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';


class Dashboard extends Component {

    renderContent(){


        let hours = new Date().getHours();
        let isMorning = hours > 5 && hours < 11;
        let isNight = hours > 19 && hours < 24;

        let hungerCount = (this.props.tamagotchi.meals / 3) * 100;
        let petCount = (this.props.tamagotchi.pets / 5) * 100;
        let cleanCount = (this.props.tamagotchi.clean / 2) * 100;




        if(this.props.auth){
            switch (this.props.tamagotchi) {
                case false:
                    return<Link to="/tamagotchi/new">
                        NEW
                    </Link>;

                default:
                    if(this.props.tamagotchi.status == "DEAD"){
                        return <div>
                                Your Tamagotchi didn't make it

                                <button onClick={() => this.props.deleteTamagotchi(this.props.tamagotchi)} >New Pet</button>

                                </div>
                    }
                    return <div>
                                <span className="tamagotchi-name"> Name:{this.props.tamagotchi.name}</span><br></br>
                                Meals:{this.props.tamagotchi.meals}<br></br>
                                Pets:{this.props.tamagotchi.pets}<br></br>
                                Status:{this.props.tamagotchi.status}<br></br>
                                Clean Up:{this.props.tamagotchi.clean}<br></br>
                                Woken Up:{String(this.props.tamagotchi.wake)}<br></br>
                                Put to Sleep:{String(this.props.tamagotchi.sleep)}<br></br>
                                <img src={this.props.tamagotchi.assetUrl}></img>
                                <button onClick={() => this.props.feedTamagotchi(this.props.tamagotchi)} >feed</button>
                                <button onClick={() => this.props.petTamagotchi(this.props.tamagotchi)} >pet</button>
                                <button onClick={() => this.props.cleanTamagotchi(this.props.tamagotchi)} >clean up</button>
                                <button onClick={() => this.props.deleteTamagotchi(this.props.tamagotchi)} >Delete Pet</button>
                                <button onClick={() => this.props.wakeTamagotchi(this.props.tamagotchi)} disabled={!this.props.tamagotchi.wake == false || !isMorning} >Wake</button>
                                <button onClick={() => this.props.sleepTamagotchi(this.props.tamagotchi)} disabled={!this.props.tamagotchi.sleep == false || !isNight} >Sleep</button>


                                <progress className="progress is-primary" value={hungerCount} max="100"></progress>
                                <progress className="progress is-success" value={petCount} max="100"></progress>
                                <progress className="progress is-warning" value={cleanCount} max="100"></progress>
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
    return { tamagotchi: tamagotchi,
    auth: auth};
}


export default connect(mapStateToProps, actions)(Dashboard);