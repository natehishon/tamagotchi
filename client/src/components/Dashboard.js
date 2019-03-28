import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import * as actions from "../actions";
import { DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';

import ConfirmButton from 'react-confirm-button';


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
                    return <div className="link-container">
                                <Link className="new-link" to="/tamagotchi/new" >
                                    <button className="link-button button is-info"> New Tamagotchi</button>
                                </Link>
                            </div>

                default:
                    if(this.props.tamagotchi.status == "DEAD"){
                        return <div className="didnt-make-it-container">
                            <div className="didnt-make-it-box">
                                <p>Your Tamagotchi didn't make it</p>

                                <button className="button is-success" onClick={() => this.props.deleteTamagotchi(this.props.tamagotchi)} >Start Over</button>
                            </div>

                                </div>
                    }
                    return <div className="tamagotchi-container">
                                <div className="tamagotchi-box">
                                    <div className="top-panel">
                                        <div className="info-panel">
                                            <span className="tamagotchi-name"> Name: {this.props.tamagotchi.name}</span><br></br>
                                            <span className="tamagotchi-status">Status: {this.props.tamagotchi.status}</span><br></br>
                                            Woken Up: {this.props.tamagotchi.wake == true
                                            ? <i className="fa fa-check-circle green"></i>
                                            : <i className="fa fa-times red"></i>} <br></br>
                                            Put to Sleep: {this.props.tamagotchi.sleep == true
                                                ? <i className="fa fa-check-circle green"></i>
                                                : <i className="fa fa-times red"></i>}<br></br>
                                        </div>
                                        <div className="image-panel">
                                            <img className="tamagotchi-image" src={this.props.tamagotchi.assetUrl}></img>
                                        </div>
                                    </div>

                                    <div className="button-panel">
                                        <button className="button is-primary" onClick={() => this.props.feedTamagotchi(this.props.tamagotchi)}>feed</button>
                                        <button className="button is-info" onClick={() => this.props.petTamagotchi(this.props.tamagotchi)}>pet</button>
                                        <button className="button is-warning" onClick={() => this.props.cleanTamagotchi(this.props.tamagotchi)}>clean up</button>

                                        <button className="button is-success" onClick={() => this.props.wakeTamagotchi(this.props.tamagotchi)}
                                                disabled={!this.props.tamagotchi.wake == false || !isMorning}>Wake
                                        </button>
                                        <button className="button is-link" onClick={() => this.props.sleepTamagotchi(this.props.tamagotchi)}
                                                disabled={!this.props.tamagotchi.sleep == false || !isNight}>Sleep
                                        </button>



                                    </div>

                                    <div className="bar-container">
                                        <span>Meals:</span>
                                        <progress className="progress is-primary" value={hungerCount} max="100"></progress>
                                        <span>Pets:</span>
                                        <progress className="progress is-success" value={petCount} max="100"></progress>
                                        <span>Clean Ups:</span>
                                        <progress className="progress is-warning" value={cleanCount} max="100"></progress>
                                    </div>

                                    <div className="delete-tamagotchi-container">

                                    <ConfirmButton className="button is-danger"
                                                   onConfirm={() => this.props.deleteTamagotchi(this.props.tamagotchi)}
                                                   text="Delete Tamagotchi"
                                                   confirming={{
                                                       text: "Are you sure?",
                                                       className: 'button is-danger'
                                                   }}>
                                    </ConfirmButton>
                                    </div>

                                </div>
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