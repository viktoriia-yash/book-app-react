import React from "react";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  var thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="Close" onClick={onClose}>
            X
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="more-book-details">
              <h3 className="title-detail">{item.volumeInfo.title}</h3>
              <h3 className="author-detail">{item.volumeInfo.authors}</h3>
              <h4 className="publish-date">
                {item.volumeInfo.publisher}{" "}
                <span>{item.volumeInfo.publisherDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button className="more-btn">More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
