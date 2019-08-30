import {
    MESSAGE_ROOM_START,
    MESSAGE_ROOM_SUCCESS,
    MESSAGE_FAILD,
    CHAT_LISTEN
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    message: null,
    messages: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MESSAGE_ROOM_START:
            return {
                ...state, loading: true
            };
        case MESSAGE_ROOM_SUCCESS:

            return {
                ...state, loading: false, message: action.payload
            };

        case CHAT_LISTEN:
            return {
                ...state, loading: false, messages: action.payload
            };
        case MESSAGE_FAILD:
            return {
                ...state, loading: false
            };

        default:
            return state;
    }
};