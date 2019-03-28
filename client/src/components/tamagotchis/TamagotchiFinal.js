import _ from 'lodash';
import React from 'react';
import { connect } from "react-redux";
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'
import {createTamagotchi} from "../../actions";

const TamagotchiFinal = ({ onCancel, formValues, createTamagotchi, history }) => {


    return (
        <div className="tamagotchi-final-container">
            <div className="tamagotchi-final-box">
                <h3>Are you sure?</h3>

                <div className="final-name-container">
                    <span>Tamagotchi Name: {formValues.name}</span>

                </div>


                <div>
                    <img src={formValues.assetUrl}></img>
                </div>

                <div className="final-button-container">
                <button onClick={() => createTamagotchi(formValues, history)} className="button is-info">submit</button>
                <button onClick={onCancel} className="button is-danger">Back </button>

                </div>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.tamagotchiForm.values
    };
};

export default connect(mapStateToProps, actions)(withRouter(TamagotchiFinal));