import React from "react";

const Main = () => {
  return (
    <>
      <div className="header">
        <div className="rowOne">
          <h1>Girlfailure' Books</h1>
        </div>
        <div className="rowTwo">
          <div className="searchBar">
            <inpute type="text" placeholder="Enter Book Name" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
