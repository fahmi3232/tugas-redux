import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListFilm } from '../../Actions/FilmAction'

function ListFilm() {
    const {getListFilmResult, getListFilmLoading, getListFilmError} = 
    useSelector((state) => state.FilmReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        // Get List Film
        console.log("Use Effect Compo did Mount");
        dispatch(getListFilm())
    }, [dispatch])
  return (
    <div>
      <h4>List Film</h4>
      {getListFilmResult ? (
        getListFilmResult.map((fil) => {
          return(
            <p key={fil.id}>{fil.Title} - {fil.nohp}</p>
          )
        })
      ): getListFilmLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getListFilmError ? getListFilmError : "Data Kosong"}</p>
      )}
    </div>
  )
}

export default ListFilm