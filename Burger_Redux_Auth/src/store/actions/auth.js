import * as actionTypes from './actionTypes';
import axios from 'axios'



export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKYBPFeA9l78P8w2xcmjVaDu8FKOo06Kk'
        if(isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDKYBPFeA9l78P8w2xcmjVaDu8FKOo06Kk'
        }
        axios.post(url, authData)
        .then(response => {
            // console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId))
        })
        .catch(err => {
            // console.log(err)
            dispatch(authFail(err))
        })
    };
};    