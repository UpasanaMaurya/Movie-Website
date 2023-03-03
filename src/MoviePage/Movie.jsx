import React from "react";
//import './Movie.css'
import { NavLink } from "react-router-dom";
import { useGlobalCustomHook } from "./AppContext";

const Movie = () => {
  const { movie, isLoading } = useGlobalCustomHook();
  //setIsLoading(true);//testing
  if (isLoading) {
    return(
      <div className="text-center text-light ">
        <small>loading......</small>
      </div>
    )
  }
  return (
    <>
      <div className="container">
        <div className="row m-1">
          {movie.map((curMovie) => {
            const { Poster, Title, Type, Year, imdbID } = curMovie;
            //const movieName=Title.substring(0,15)
            return (
              <div
                className="col-md-3 justify-content-between text-center"
                key={imdbID}
              >
                <NavLink to={`movie/${imdbID}`}>
                  <div className="card" style={{ width: "18rem" }}>
                    <h5 className="card-title">{Title}</h5>
                    <img src={Poster} className="card-img-top w-100 " alt="..."/>
                    <div className="card-body d-flex justify-content-between text-center ">
                      <p className="card-text">Year :{Year}</p>
                      <button className="btn btn-primary">{Type}</button>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
