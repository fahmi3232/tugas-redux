import axios from "axios";

export const GET_LIST_FILM = "GET_LIST_FILM"

export const getListFilm = () => {
    console.log("Masuk Action")
    return(dispatch) => {
        dispatch({
            type: GET_LIST_FILM,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        axios({
            method: "GET",
            url: "https://www.omdbapi.com/?apikey=20e7f455&s=movies",
            timeout: 110000
        })
        .then((resp) => {
            console.log("Berhasil Dapat Data");
            dispatch({
                type: GET_LIST_FILM,
                payload: {
                    loading: false,
                    data: resp.data.Search,
                    errorMessage: false
                }
            })
        })
        .catch((err) => {
            console.log("Gagal Dapat Data");
            dispatch({
                type: GET_LIST_FILM,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.MESSAGE
                }
            })
        })
    }
}