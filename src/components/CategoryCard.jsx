import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CategoryCard.scss";

function CategoryCard({ title, image, redirect_path_name }) {
  let navigate = useNavigate();

  const redirect = () => {
    navigate(`/Category/${redirect_path_name}`);
  };

  return (
    <div className="category_card">
      <div className="category_card_title">{title}</div>
      <div className="category_card_background">
        <img src={image} alt={title} />
      </div>
      <div className="card_button" onClick={redirect}>
        Explore
      </div>
    </div>
  );
}

export default CategoryCard;
