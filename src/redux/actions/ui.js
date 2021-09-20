export const SET_RESPONSE = 'SET_RESPONSE';
export const TOGGLE_FRIENDSMODALOPEN = 'TOGGLE_FRIENDSMODALOPEN';
export const SET_USER_LOGGEDIN = 'SET_USER_LOGGEDIN';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_NOTIFICATIONS = 'SET_USER_NOTIFICATIONS';

export const setResponse = (response) => {
    return {
        type: SET_RESPONSE,
        payload: response,
    }
}

export const toggleFriendsModalOpen = () => {
    return {
        type: TOGGLE_FRIENDSMODALOPEN,
    }
}

export const setUserLoggedIn = (value) => {
    return {
        type: SET_USER_LOGGEDIN,
        payload: value,
    }
}

export const setUserInfo = (value) => {
    return {
        type: SET_USER_INFO,
        payload: value,
    }
}

export const setUserNotifications = (value) => {
    return {
        type: SET_USER_NOTIFICATIONS,
        payload: value,
    }
}