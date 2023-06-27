import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

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
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="book-details">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="cost">{bookCost}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
