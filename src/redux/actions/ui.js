export const SET_RESPONSE = 'SET_RESPONSE';
export const TOGGLE_FRIENDSMODALOPEN = 'TOGGLE_FRIENDSMODALOPEN';

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