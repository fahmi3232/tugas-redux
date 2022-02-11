import { combineReducers } from "redux";
import KontakReducer from "./Kontak";
import FilmReducer from './Film'

export default combineReducers({
    KontakReducer, FilmReducer
})