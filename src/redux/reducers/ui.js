import {
    SET_RESPONSE,
    TOGGLE_FRIENDSMODALOPEN,
    SET_USER_LOGGEDIN,
    SET_USER_INFO,
    SET_USER_NOTIFICATIONS,
} from "../actions/ui";

const initialState = {
    userLoggedIn: false,
    response: {
        data: null,
        error: null,
        action: null
    },
    friendsModalOpen: false,
    userInfo: {}
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_RESPONSE: {
            return {
                ...state,
                response: {
                    ...state.response,
                    data: payload.data,
                    error: payload.error,
                    action: payload.action
                }
            }
        }
        case TOGGLE_FRIENDSMODALOPEN: {
            return {
                ...state,
                friendsModalOpen: !state.friendsModalOpen
            }
        }
        case SET_USER_LOGGEDIN: {
            return {
                ...state,
                userLoggedIn: payload,
            }
        }
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: payload,
            }
        }
        case SET_USER_NOTIFICATIONS: {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    notifications: [
                        ...state.userInfo.notifications,
                        payload,
                    ]
                }
            }
        }
        default:
            return state;
    }
}

export default reducer