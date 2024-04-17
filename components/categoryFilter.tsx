import React from "react";

type props = {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onSelectedCategory,
}: props) {
  const categories = ["car", "construction", "agriculture", "gem", "art"];
  return (
    <div>
      <h1>Product Categories</h1>
      {categories.map((category) => (
        <div>
          <div>
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategory === category}
                value={category}
                onChange={() => onSelectedCategory(category)}
              />
              {category}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
