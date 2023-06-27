import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="rowOne">
          <h1>Girlfailure' Books</h1>
        </div>
        <div className="rowTwo">
          <h3>Find Your Book</h3>
          <div className="searchBar">
            <input type="text" placeholder="Enter Book Name" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
