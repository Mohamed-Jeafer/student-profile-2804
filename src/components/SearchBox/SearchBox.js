import React from "react";
import "./SearchBox.css"

const SearchBox = ({searchChange}) => {
    return (
        <div className="text-center">
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