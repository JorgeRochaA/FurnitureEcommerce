import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categories from "../data/categories.json";

function FurnitureByCategory() {
  let navigate = useNavigate();
  let { name } = useParams();

  useEffect(() => {
    let found = categories.find(
      (category) => category.redirect_path_name === name
    );
    if (!found) {
      navigate("/page-not-found");
    }
  }, [name, navigate]);

  return (
    <div className="furniture_by_category">
      here we have to put all the furniture's with the category:
      <strong>
        <h1>{name}</h1>
      </strong>
    </div>
  );
}

export default FurnitureByCategory;
