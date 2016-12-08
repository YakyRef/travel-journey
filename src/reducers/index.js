import {combineReducers} from "redux";
import { routerReducer } from 'react-router-redux'
import * as actions from './../actions'


const AcActivities = (state = {}, action) => {
    switch (action.type) {
        case 'BLOCK_SUCCESS':
            console.log(action.response);
            return {isFetch: false, activities: action.response};
        case 'BLOCK_REQUEST':
            return {...state, isFetch: true};
        case 'BLOCK_FAIL':
            return {isFetch: false, error: action.error}
        default:
            return state;
    }
};

const Filter = (state={filter:'ALL'},action)=>{
    switch (action.type){
        case actions.VISIBILITY_FILTER:
            return {...state,filter:action.filter,params:action.params};
        case actions.CHANGE_DATES:
            return {...state,startDate:action.dates.startDate,endDate:action.dates.endDate};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    AcActivities,
    Filter,
    routing: routerReducer
});

export default rootReducer;