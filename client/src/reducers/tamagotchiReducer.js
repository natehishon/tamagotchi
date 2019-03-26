import { FETCH_TAMAGOTCHI, MOD_TAMAGOTCHI} from "../actions/types";


export default function (state = {}, action){
    switch (action.type){

        case FETCH_TAMAGOTCHI:
            if(action.payload){
                 return action.payload
            }
            return false;

        case MOD_TAMAGOTCHI:
            console.log("here");
            if(action.payload){
                return action.payload
            }
            return false;
        default:
            return state;
    }
}