import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    await console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const createTamagotchi = (values) => async dispatch => {
    console.log(values);
    const res = await axios.post('/api/tamagotchi', values);
    dispatch({ type: FETCH_USER, payload: res.data})

};