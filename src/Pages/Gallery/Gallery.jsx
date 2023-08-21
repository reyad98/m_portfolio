import React from "react";
import img3 from "../images/grap1.jpg";
import img2 from "../images/img4.jpg";
import img1 from "../images/photo1.jpg";
import "./Gallery.css"; // Your provided CSS

const cardsData = [
  {
    title: "Canyons",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    imageUrl:
      "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
  },
  {
    title: "Beaches",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    imageUrl: img1,
  },
  {
    title: "Trees",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    imageUrl: img2,
  },
  {
    title: "Lakes",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
                  <button className="btn btn--block card__btn">Button</button>
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
