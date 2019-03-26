import { FETCH_USER} from "../actions/types";


export default function (state = {}, action){
    switch (action.type){

        case FETCH_USER:
            console.log("2");
            console.log(action);
            return action.payload || false;

        default:
            return state;
    }
}