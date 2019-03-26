import { combineReducers } from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import tamagotchiReducer from './tamagotchiReducer';

export default combineReducers({
    auth: authReducer,
    tamagotchi: tamagotchiReducer,
    form: reduxForm
});