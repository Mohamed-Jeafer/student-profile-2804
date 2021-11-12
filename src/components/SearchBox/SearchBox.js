import React from "react";
import "./SearchBox.css"

const SearchBox = ({searchChange}) => {
    return (
        <div id="searchbox" className="text-center searchbox">
            <input 
            className="text-center"
            type="search" 
            placeholder="Search Students" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;