import { Alert, AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';

import { registerValidation, loginValidation } from './Validations';

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILD,

    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILD,
    SAVE_USER_INFO,
} from './types';


export const login = (email, password) => {
    return (dispatch) => {
        if(loginValidation(email,password)) {
            dispatch({ type: LOGIN_START });

            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
                console.log(user.user._user);
                AsyncStorage.setItem(SAVE_USER_INFO, JSON.stringify({ email, password}));
                getUserData(user.user._user.uid, dispatch);
            }).catch(error => {
                console.log('Error:', error);
                Alert.alert('Your password or email was wrong!')
                dispatch({ type: LOGIN_FAILD });
            });
        }      
    }
}

export const register = (username, email, password, passwordConfirm ) => {
    return (dispatch) => {
        if(registerValidation(username, email, password, passwordConfirm)) {
            dispatch({ type: REGISTER_START });
            firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
                console.log('Register Başarılı: ', user.user._user.uid);
                const id = user.user._user.uid;

                const user_info = { username, email, password };

                firebase.database().ref('users').child(id).set({ username, email, password }).then(success => {
                    console.log("Kayıt başarılı: ", success);
                    AsyncStorage.setItem(SAVE_USER_INFO, JSON.stringify({ email, password }));
                    dispatch({ type: REGISTER_SUCCESS, payload: user_info });
                    Actions.main({ type: 'reset' });
                }).catch(error => {
                    console.log("Kayıt başarısız: ", error);
                });

            }).catch(error => {
                console.log('Register Hatalı:', error); 
                dispatch({ type: REGISTER_FAILD });
            });
         }
    }
}

const getUserData = async (id, dispatch) => {

    firebase.database().ref('users').child(id).once('value').then(function (snapshot) {
        dispatch({ type: LOGIN_SUCCESS, payload: snapshot.val() });
        Actions.main({ type: 'reset' });
        
    }).catch(error => {
        console.log(error);
    })
}