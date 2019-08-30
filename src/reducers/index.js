import { combineReducers } from 'redux'

import AuthReducers from './AuthReducers';
import MessageReducers from './MessageReducers';

export default combineReducers({
    authResponse: AuthReducers,
    messageResponse: MessageReducers
});