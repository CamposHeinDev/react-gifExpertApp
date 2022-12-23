import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Muscle cars",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* listado de gifs */}
        {categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category} 
          />
        ))}
    </>
  );
};
