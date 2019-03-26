import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TamagotchiField from './TamagotchiField'
import formFields from './formFields'


class TamagotchiForm extends Component{
    renderFields(){

        return _.map(formFields, ({ label, name }) => {
            return <Field component={TamagotchiField} type="text" label={label} name={name} />
        })
        // return (
        //     <div>
        //         <Field type="text" label="Name" name="name" component={TamagotchiField} />
        //         <Field type="text" label="Select Picture" name="assetUrl" component={TamagotchiField} />
        //     </div>
        // )
    }
    render() {
        return (
            <div>

                <form onSubmit={this.props.handleSubmit(this.props.onTamagotchiSubmit)}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(formFields, ({ name }) => {
        if(!values[name]){
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'tamagotchiForm',
    destroyOnUnmount: false
})(TamagotchiForm);