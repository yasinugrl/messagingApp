import { Alert, AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import {
    MESSAGE_ROOM_START,
    MESSAGE_ROOM_SUCCESS,
    MESSAGE_FAILD,
    CHAT_LISTEN,
    ROOM_INFO
} from './types';

export const createMessageRoom = (room, user) => {
    return dispatch => {
        dispatch({ type: MESSAGE_ROOM_START });
        firebase.database().ref('rooms').child(room).limitToLast(25).once('value').then(async (snapshot) => {
            console.log('Gelennn:   ', snapshot.val());
            if (snapshot.val() != null) {
                chatListen(room, dispatch);
            } else {
                console.log('Burdada');
                dispatch({ type: MESSAGE_ROOM_SUCCESS, message: room + ' creating...', room });
                firebase.database().ref('rooms').child(room).push({ text: "Hey! this is first message. Created automaticly", createdAt: new Date(), user 
            });
                chatListen(room, dispatch);
            }
        }).catch(error => {
            dispatch({ type: MESSAGE_FAILD });
            console.log('Hatalı:', error);
        });
    }
}

async function chatListen(room, dispatch) {
    let messages = [];
    firebase.database().ref('rooms').child(room).limitToLast(25).on('value', (snapshotMessage) => {

     snapshotMessage.forEach((messageItem) => {
            const item = {
                text: messageItem.val().text,
                _id: messageItem.key,
                createdAt: messageItem.val().createdAt,
                user: {
                    _id: messageItem.val().user.userid,
                    name: messageItem.val().user.username,
                    email: messageItem.val().user.email
                }
            };
            messages = [...messages, item];
        });
        
        AsyncStorage.setItem(ROOM_INFO, room);
       
        dispatch({ type: CHAT_LISTEN, payload: messages });
        Actions.message({ title: room + ' chat rooms' });

        // messages = [];

    });
}


export const messageSend = (room, message, user) => {
    return (dispatch) => {
        if (message.trim().length >= 3) {
            firebase.database().ref('chats').child(room).push({ text: message, createdAt: new Date(), user });
        } else {
            Alert.alert('Warning!', 'You should type minimum 3-digits!');
        }
    }
}