import {GET_LIST_FILM} from '../../Actions/FilmAction'

const initialState = {
    getListFilmResult: false,
    getListFilmLoading: false,
    getListFilmError: false
}

const film = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_FILM:
            return{
                ...state,
                getListFilmResult: action.payload.data,
                getListFilmLoading: action.payload.loading,
                getListFilmError: action.payload.errorMessage
            }    
        default:
            return state
    }
}

export default film