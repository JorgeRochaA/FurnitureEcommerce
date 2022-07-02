import React from "react";
import { useParams } from "react-router-dom";
function FurnitureByCategory() {
  let { name } = useParams();
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
