import React from "react";
import img4 from "../images/food2.jpg";
import img3 from "../images/grap1.jpg";
import img2 from "../images/img4.jpg";
import img1 from "../images/photo1.jpg";
import "./Gallery.css"; // Your provided CSS

const cardsData = [
  {
    title: "Food Hood",
    content: "Fixd a meeting, Meet an Eat with cill and lox",
    imageUrl: img4,
  },
  {
    title: "Cill Cillox",
    content: "Never Entered here or Enter for Photograpy",
    imageUrl: img1,
  },
  {
    title: "Unofficial",
    content: "Unofficial with jobless tag is better then use lorem10",
    imageUrl: img2,
  },
  {
    title: "Lets Play",
    content:
      "making it more than just a game, but rather a shared experience of joy",
    imageUrl: img3,
  },
];

const Gallery = () => {
  return (
    <div className="top_gallery">
      <h2>PHOTO GALLERY</h2>
      <div className="gallery-container">
        <ul className="cards">
          {cardsData.map((card, index) => (
            <li className="cards__item" key={index}>
              <div className="card">
                <div
                  className="card__image"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                ></div>
                <div className="card__content">
                  <div className="card__title">{card.title}</div>
                  <p className="card__text">{card.content}</p>
                  <button className="btn btn--block card__btn">
                    Not a Button
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
