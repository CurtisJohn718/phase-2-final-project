import React, { useState } from "react"; 

function Search({ onUpdateSearchTerm  }) {
const [searchText, setSearchText] = useState("")

    // Handles form submission
    // e.preventDefault() "prevents" the browser from refreshing the page when the form is submitted
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateSearchTerm(searchText)
    }
    
    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
            type="text"
            id="search"
            placeholder="Welcome to the Zoo!"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">🦒</button>
        </form>
    );
}

export default Search;