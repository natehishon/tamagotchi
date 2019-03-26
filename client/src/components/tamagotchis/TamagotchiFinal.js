import _ from 'lodash';
import React from 'react';
import { connect } from "react-redux";
import formFields from './formFields';
import * as actions from '../../actions'
import {createTamagotchi} from "../../actions";

const TamagotchiFinal = ({ onCancel, formValues, createTamagotchi }) => {

    // const finalFields = _.map(formFields, ({name, label}) => {
    //
    //     return (
    //         <div key={name}>
    //             <label>{label}</label>
    //             <div>
    //                 {formValues[name]}
    //             </div>
    //         </div>
    //     )
    //
    // });

    return (
        <div>
            <h3>Are you sure?</h3>

            <div>
                <label>Tamagotchi Name</label>
                <div>{formValues.name}</div>
            </div>

            <div>
                <img src={formValues.assetUrl}></img>
            </div>

            <button
                onClick={onCancel}>
                Back
            </button>
            <button onClick={() => createTamagotchi(formValues)}>submit</button>
        </div>
    )
};

function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: state.form.tamagotchiForm.values
    };
};

export default connect(mapStateToProps, actions)(TamagotchiFinal);