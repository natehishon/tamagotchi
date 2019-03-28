import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import TamagotchiField from './TamagotchiField'
import formFields from './formFields'
import ImagePickerComponent from './imagePicker';
import ImagePicker from 'react-image-picker';

import 'react-image-picker/dist/index.css';

import img1 from '../../assets/bear.png';
import img2 from '../../assets/buffalo.png';
import img3 from '../../assets/chick.png';
import img4 from '../../assets/chicken.png';
import img5 from '../../assets/cow.png';

const imageList = [img1, img2, img3, img4, img5];


class TamagotchiForm extends Component{

    constructor(props) {
        super(props)
        this.state = {
            image: null
        }
        this.onPick = this.onPick.bind(this)
    }

    onPick(image) {
        this.props.dispatch(change('tamagotchiForm', 'assetUrl', image.src));
    }

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
                    {/*{this.renderFields()}*/}
                    <Field label="Name" name="name" component="input"></Field>
                    <Field label="AssetUrl" type="hidden" name="assetUrl" component="input"></Field>
                    <ImagePicker
                        images={imageList.map((image, i) => ({src: image, value: i}))}
                        onPick={this.onPick}
                    />

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