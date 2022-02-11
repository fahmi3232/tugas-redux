import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../Actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } =
    useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // get list kontak
    console.log("1. use Effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);
  return(
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kon) => {
          return(
            <p key={kon.id}>{kon.nama} - {kon.nohp}</p>
          )
        })
      ): getListKontakLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  ) 
}

export default ListKontak;
