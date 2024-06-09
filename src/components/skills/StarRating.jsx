// StarRating.jsx
import React from "react";
import PropTypes from "prop-types";
import "./StarRating.css";

const StarRating = ({ rating, outOf = 10 }) => {
  const stars = Array(outOf).fill(0);
  return (
    <div className="star_rating">
      {stars.map((_, index) => (
        <i
          key={index}
          className={`bx ${index < rating ? "bxs-star" : "bx-star"}`}
        ></i>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  outOf: PropTypes.number,
};

export default StarRating;
