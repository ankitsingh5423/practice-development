import React from "react";

function Card({ name, job, image, text, setI, el, reviews }) {
  return (
    <>
      <div className="card">
        <div className="profile-image">
          <img src={image} style={{ objectFit: "cover" }} alt="User Image" />
          <div className="quote-icon">❝</div>
        </div>
        <h2 className="name">{name}</h2>
        <p className="role">{job}</p>
        <p className="description">{text}</p>
        <div className="arrows">
          <span
            className="arrow-left"
            onClick={() => setI(el <= 0 ? reviews.length - 1 : el - 1)}
          >
            &#x276E;
          </span>
          <span
            className="arrow-right"
            onClick={() => {
              setI(el > reviews.length - 2 ? 0 : el + 1);
            }}
          >
            &#x276F;
          </span>
        </div>
        <button
          className="surprise-btn"
          onClick={() => {
            setI(Math.floor(Math.random(el) * 4));
          }}
        >
          Surprise Me
        </button>
      </div>
    </>
  );
}

export default Card;
