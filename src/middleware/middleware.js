import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

export const CALL_API = "callApi";

function callGetApi(endpoint, parameters) {

    const api_root = `http://hackathon.oradsi-pc/api/v1/events`;
    const fullUrl = (endpoint.indexOf(api_root) === -1) ? api_root + endpoint : endpoint;
    console.log(fullUrl);
    return fetch(fullUrl, parameters)
        .then(response =>
            response.json().then(json => ({json, response}))
        ).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        });
}

export default store => next => action => {
    if (action.type !== CALL_API) {
        return next(action);
    }
    let {endpoint} = action;
    const {types, httpParameters, nextPath} = action;

    const [ requestTypeLoading, successType, failureType ] = types;
    next({type: requestTypeLoading});
    return callGetApi(endpoint, httpParameters).then(
        response => {
            next({type: successType, response});
            nextPath && browserHistory.push(nextPath);
        },
        error => {
            next({type: failureType, response: error.Message});
        }
    );
};
