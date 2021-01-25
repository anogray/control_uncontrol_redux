
import * as ActionTypes from './ActionTypes';
//import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
const axios = require("axios");


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:comment
});

export const postComment = (dishId, rating, author, comment) => async(dispatch) =>{

    //get this from propped from dishDetails got prop which was passed from mainComponent        
    const newComment = {
                    dishId: dishId,
                    rating: rating,
                    author: author,
                    comment: comment
                };
                newComment.date = new Date().toISOString();
                
                console.log("newComment",newComment)

                const header = {"Content-Type": "application/json"}

                try{
                    //console.log("tried")
                    const res = await axios.post(baseUrl+"comments", newComment, header)
                  // console.log("res.status",res.status);
            //console.log("res.data",res.data);
                    dispatch(addComment(res.data))
                }
                catch(error){
                    console.log("comment posted failed".error.message)
                    alert(error.message);
                }

            // const res = await axios.post(baseUrl+"comments", newComment. header)
            // console.log("res.status",res.status);
            // console.log("res.data",res.data);

}

export const fetchDishes = () => async(dispatch) => {

    dispatch(dishesLoading());
    
    try{
        console.log("tried")
        const res = await axios.get(baseUrl+"dishes")
        console.log("res try",res)
        dispatch(addDishes(res.data))
    }
    catch(error){
        let err=error;
        if(error.response==undefined)
        {err="Network Error"}
        else{
            err=error.response.statusText+":"+error.response.status
        }
        dispatch(dishesFailed(err))
    }
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => async(dispatch) => {  
    
    try{
        console.log("tried")
        const res = await axios.get(baseUrl+"comments")
        console.log("res try",res)
        dispatch(addComments(res.data))
    }
    catch(error){
        let err=error;
        if(error.response==undefined)
        {err="Network Error"}
        else{
            err=error.response.statusText+":"+error.response.status
        }
        dispatch(commentsFailed(err))
    }
    // return fetch(baseUrl + 'comments')
    // .then(response => response.json())
    // .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => async(dispatch) => {
    
    dispatch(promosLoading());

    try{
        console.log("tried")
        const res = await axios.get(baseUrl+"promotions")
        console.log("res try",res)
        dispatch(addPromos(res.data))
    }
    catch(error){
        let err=error;
        if(error.response==undefined)
        {err="Network Error"}
        else{
            err=error.response.statusText+":"+error.response.status
        }
        dispatch(promosFailed(err))
    }
    

    // return fetch(baseUrl + 'promotions')
    // .then(response => response.json())
    // .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = ()=> async(dispatch) =>{

    dispatch(leadersLoading());

    try{
        const res = await axios.get(baseUrl+"leaders")
        dispatch(addLeaders(res.data))
    }
    catch(error){
        let err=error;
        if(error.response==undefined)
        {err="Network Error"}
        else{
            err=error.response.statusText+":"+error.response.status
        }
        dispatch(leadersFailed(err))
    }
}

export const leadersLoading = ()=>(
    {type: ActionTypes.LEADERS_LOADING}
    )

export const leadersFailed = (errMess)=>(
        {type: ActionTypes.LEADERS_FAILED,
        payload: errMess}
        )

export const addLeaders = (leaders)=>({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders})


export const postFeedback = (feedback)=> async(dispatch)=>{
    
    console.log("posting feedback before db")

    try{

        const header = {"Content-Type": "application/json"}
        const getfeedback = await axios.get(baseUrl+"feedback")
        
        const id =  getfeedback.data.length?getfeedback.data.length+1:1;
   
        feedback = {...feedback,id:id}

        const res = await axios.post(baseUrl+"feedback", feedback, header)
        console.log("posting feedback in db")

    }
    catch(error){
         console.log("post error",error)
        let err=error;
        if(error.response==undefined)
        {err="Network Error"}
        else{
            err=error.response.statusText+":"+error.response.status
        }
        dispatch(feedbackFailed(err))
    }
}

// export const addFeedback = (feedback)=>{
//     return {type:ActionTypes.ADD_FEEDBACK,
//         payload:feedback}
// }

export const feedbackFailed = (errMess)=>{
    return {type:ActionTypes.FEEDBACK_FAILED,
        payload:errMess}
}