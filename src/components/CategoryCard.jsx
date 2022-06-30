import React from "react";
import "../styles/CategoryCard.scss";
function CategoryCard({ title, image }) {
  return (
    <div className="category_card">
      <div className="category_card_title">{title}</div>
      <div className="category_card_background">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default CategoryCard;
