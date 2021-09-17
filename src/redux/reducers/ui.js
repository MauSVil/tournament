import {
    SET_RESPONSE,
    TOGGLE_FRIENDSMODALOPEN
} from "../actions/ui";

const initialState = {
    response: {
        data: null,
        error: null,
        action: null
    },
    friendsModalOpen: false
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
        default:
            return state;
    }
}

export default reducer