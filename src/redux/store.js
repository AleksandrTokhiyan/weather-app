import {applyMiddleware, combineReducers, createStore} from "redux";
import {weatherReducer} from "./weather/reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    weather: weatherReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store
