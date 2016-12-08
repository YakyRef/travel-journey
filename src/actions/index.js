import { CALL_API } from './../middleware/middleware';

export const BLOCK_SUCCESS= "BLOCK_SUCCESS";
export const BLOCK_REQUEST= "BLOCK_REQUEST";
export const BLOCK_FAIL= "BLOCK_FAIL";
export const VISIBILITY_FILTER="SET_VISIBILITY_FILTER";
export const CHANGE_DATES="CHANGE_DATES";

const getAction = (endpoint, types) => (details) => {
    return {
        type: CALL_API,
        httpParameters: {
        method: 'GET',
        mode: 'cors'},
        endpoint:`${endpoint}`,
        types,
        nextPath:details.nextPath
    }
};


export const getAccountHolder = getAction('/user', [BLOCK_REQUEST,BLOCK_SUCCESS, BLOCK_FAIL]);

export const changeFilter = (filter,params) =>(
    {
        type:VISIBILITY_FILTER,
        filter,
        params
    }
);

export const ChangeDate = (dates) =>({
    type:CHANGE_DATES,
        dates
});