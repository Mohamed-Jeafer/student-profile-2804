import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div id="searchBox" className="text-center searchBox">
      <input
        className="text-center"
        type="search"
        placeholder="Search Students"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
