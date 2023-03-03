import React from "react";
import './Search.css'
import { useGlobalCustomHook } from "./AppContext";

const Search = () => {
  const { query, setQuery, isError } = useGlobalCustomHook();

  return (
    <section className="search-section m-5">
      <h2 className="text-center text-light">Search Your Favourite Movie</h2>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group mx-5 d-flex bg-light">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-search m-2 text-primary"
              viewBox="0 0 20 20"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="form-control text-primary"
            placeholder="Search Here"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="cart-error">
        <p className="text-center text-danger">{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
