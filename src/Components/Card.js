import React from "react";

const Card = ({ book }) => {
  console.log(book);

  return (
    <>
      {book.map((item) => {
        var thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        var bookCost =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && bookCost !== undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="book-details">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="cost">{bookCost}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
