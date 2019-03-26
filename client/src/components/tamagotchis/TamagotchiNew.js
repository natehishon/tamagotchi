import React, { Component } from 'react';
import TamagotchiForm from './TamagotchiForm';
import TamagotchiFinal from './TamagotchiFinal';
import { reduxForm } from 'redux-form';

class TamagotchiNew extends Component{
    state = { showFormFinal: false };

    renderContent(){
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

export default reduxForm({
    form: 'tamagotchiForm'
})(TamagotchiNew);