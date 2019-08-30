import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILD,

    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILD
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    user: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_START:
        case LOGIN_START:
            return {
                ...state, loading: true
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:

            return {
                ...state, loading: false, user: action.payload
            };

        case REGISTER_FAILD:
        case LOGIN_FAILD:
            return {
                ...state, loading: false
            };

        default:
            return state;
    }
};