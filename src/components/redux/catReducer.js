import { SET_CATS, SET_DETAILS } from "./types";

const initialState = {
    cats: []
};

const catReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_CATS: 
            return {...state, cats: action.cats};
        default:
            return state;
    }
}

export default catReducer;

export const detailsReducer = (state={}, action)=>{
    switch(action.type){
        case SET_DETAILS: 
            return {...state, ...action.cat};
        default:
            return state;
    }
}
