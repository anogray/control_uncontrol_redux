import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {isLoading:true, errMess:null, feedback:[]}, action) => {

    switch (action.type) {

        // case  ActionTypes.ADD_FEEDBACK:
        // return {...state, isLoading:false, errMess:null, leaders:action.payload}

        // case ActionTypes.ADD_FEEDBACK:
        //     return {...state, isLoading:true, errMess:null, feedback:[]}
        
        case ActionTypes.FEEDBACK_FAILED:
            return {...state, isLoading:false, errMess:action.payload}

        return state;
    }
}