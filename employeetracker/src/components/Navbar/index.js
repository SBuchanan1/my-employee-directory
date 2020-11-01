import React from 'react';
import SearchName from "../SearchName";


import "./Nav.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="search-area col-4">
                <SearchName />
            </div>
        </nav>
    );
}
export default Navbar;