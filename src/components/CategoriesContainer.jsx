import React from "react";
import "../styles/CategoriesContainer.scss";
import CategoryCard from "./CategoryCard";
import categories from "../data/categories.json";
function CategoriesContainer() {
  return (
    <div className="categories_container" id="explore">
      <div className="categories_container_title">Explore by Category</div>
      <div className="categories_map_container">
        {categories.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.path}
              redirect_path_name={category.redirect_path_name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesContainer;
