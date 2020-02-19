// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
      </div>
      {/* Search Bar */}
      <form className="search-form">
        <div className="search-glass"><i class="fas fa-search"></i></div>
        <input
          type="text"
          placeholder="Search"
          onChange={props.handleChange}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
