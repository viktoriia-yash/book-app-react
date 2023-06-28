import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBMenjP3EOtqxEsc8bPpk3ox1lKAl6Simo" +
            "&maxResults=20"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="rowOne">
          <a className="home-btn" href="/">
            <h1 className="app-title">Girlfailure' Books</h1>
          </a>
        </div>
        <div className="rowTwo">
          <h3 className="search-book-title">Find Your Book</h3>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Enter Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={searchBook}
              className="search-bar-book"
            />
            <button className="search-btn-book">Search</button>
          </div>
        </div>
      </div>
      <div className="body-page">
        <div className="container">{<Card book={bookData} />}</div>
      </div>
    </>
  );
};

export default Header;
