import "./singleMovie.css";
import { NavLink, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Movie_URL } from "./AppContext";

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let ClearTimeOuts = setTimeout(() => {
      getMovies(`${Movie_URL}&i=${id}`);
    }, 300);
    return () => clearTimeout(ClearTimeOuts);
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-center text-light ">
        <small>loading......</small>
      </div>
    );
  }
  return (
    <div className="container bg-light text-center p-5">
      <div className="row m-5">
        <div className="col-md-6">
          <img src={movie.Poster} className="card-img-top " alt="..." />
        </div>
        <div className="col-md-5 m-auto text-dark lead bg-light">
          <h5 className="m-2 p-2">{movie.Title}</h5>
          <p className="m-2 p-2">Year :{movie.Released}</p>
          <p className="m-2 p-2">Year :{movie.Genre}</p>
          <p className="m-2 p-2">Year :{movie.imdbRating}</p>
          <p className="m-2 p-2">Year :{movie.Country}</p>
          <p className="m-2 p-2">Year :{movie.Year}</p>
          {/* <button className="btn btn-primary">{movie.Type}</button> */}
          <NavLink to="/" className="btn btn-primary">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
