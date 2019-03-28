import React, { Component } from 'react';
import TamagotchiForm from './TamagotchiForm';
import TamagotchiFinal from './TamagotchiFinal';
import { reduxForm } from 'redux-form';
import {connect} from "react-redux";

class TamagotchiNew extends Component{
    state = { showFormFinal: false };

    renderContent(){

        if(this.props.tamagotchi){
            return <div></div>
        }

        if(this.state.showFormFinal) {
            return <TamagotchiFinal onCancel={() => this.setState({ showFormFinal: false })}/>
        }

        return <TamagotchiForm onTamagotchiSubmit={() => this.setState({showFormFinal: true})}/>

    }

    render() {
        return(
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

TamagotchiNew = connect(
    mapStateToProps,

)(TamagotchiNew);

export default reduxForm({
    form: 'tamagotchiForm'
})(TamagotchiNew);