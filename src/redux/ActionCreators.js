
import * as ActionTypes from './ActionTypes';
//import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
const axios = require("axios");


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

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