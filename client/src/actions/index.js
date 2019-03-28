import axios from 'axios';
import {FETCH_USER, FETCH_TAMAGOTCHI, MOD_TAMAGOTCHI} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchTamagotchi = () => async dispatch => {
    const res = await axios.get('/api/tamagotchi');
    dispatch({ type: FETCH_TAMAGOTCHI, payload: res.data});
};

export const createTamagotchi = (values, history) => async dispatch => {


    const res = await axios.post('/api/tamagotchi', values);

    history.push('/');
    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};

export const feedTamagotchi = (tamagotchi) => async dispatch => {

    console.log("FEEDIN");

    const res = await axios.post('/api/feed', tamagotchi);

    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};

export const petTamagotchi = (tamagotchi) => async dispatch => {


    const res = await axios.post('/api/pet', tamagotchi);

    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};

export const cleanTamagotchi = (tamagotchi) => async dispatch => {

    const res = await axios.post('/api/clean', tamagotchi);

    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};

export const wakeTamagotchi = (tamagotchi) => async dispatch => {

    const res = await axios.post('/api/wake', tamagotchi);

    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};

export const sleepTamagotchi = (tamagotchi) => async dispatch => {

    const res = await axios.post('/api/sleep', tamagotchi);

    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};

export const deleteTamagotchi = (tamagotchi) => async dispatch => {

    const res = await axios.post('/api/delete', tamagotchi);

    dispatch({ type: MOD_TAMAGOTCHI, payload: res.data });
};
