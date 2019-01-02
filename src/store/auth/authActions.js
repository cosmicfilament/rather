import { SET_AUTH_USER } from './authActionTypes';
import { getUser, getNewToken } from '../../utils/api';
import helpers from '../../utils/helpers';

// set auth user from login
export function setAuthUser(uid = '', password = '', name = '', avatarURL = '', token = 0) {

    return ({
        type: SET_AUTH_USER,
        uid,
        password,
        name,
        avatarURL,
        token
    });
};

export function handleLogin(uid, password) {
    return (dispatch) => {
        // showloading

        // validate the password
        // if valid then get a new Token
        // and then dispatch authUser object
        Promise.all([
            getUser(uid),
            getNewToken()
        ]).then(([user, token]) => {
            user.password === password
                ? dispatch(setAuthUser(
                    uid, password, user.name, user.avatarURL, token))
                : dispatch(setAuthUser(uid, '', '', '', -1));
        })
    };
};

export function handleLogout() {
    return (dispatch) => {
        dispatch(setAuthUser('', '', '', '', 0));
    }
};
