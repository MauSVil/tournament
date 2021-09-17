import { createStore, combineReducers } from "redux";
import ui from './reducers/ui'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    ui
});

const store = createStore(reducer, composeWithDevTools());

export default store;