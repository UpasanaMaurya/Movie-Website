import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./MoviePage/AppContext";
import Error from "./MoviePage/Error";
import Home from "./MoviePage/Home";
import Movie from "./MoviePage/Movie";
import SingleMovie from "./MoviePage/SingleMovie";

const App = () => {
  return (
    <div className="container">
      <div className="row">
      <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={ <Movie /> } />
          <Route path="movie/:id" element={ <SingleMovie /> } />
          <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
        </AppProvider>
    </div>
    </div>
  );
};

export default App;
