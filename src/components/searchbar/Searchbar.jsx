import "./searchbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Searchbar() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    min: 0,
    max: 0,
  });

  function typeButtonHandler(val) {
    setQuery((prey) => ({ ...prey, type: val }));
  }
  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => typeButtonHandler(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" className="location" placeholder="City Location" />
        <input type="number" min={0} max={10000000} placeholder="Min price" />
        <input type="number" min={0} max={10000000} placeholder="Max price" />
        <div className="search-button">
          <Link to="/list">
            <img src="./search.png" alt="" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
