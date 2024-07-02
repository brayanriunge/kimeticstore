import React from "react";

type props = {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onSelectedCategory,
}: props) {
  const categories = [
    "Cars",
    "Gem",
    "Art",
    "Coffee",
    "Tea",
    "Electronics",
    "Armoured Cars",
    "Crops",
    "Mineral",
    "Oil",
  ];
  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      onSelectedCategory("");
    } else {
      onSelectedCategory(category);
    }
  };
  return (
    <div className="md:flex items-center justify-between gap-4 font-mono text-md text-orange-400 sticky p-4 top-0">
      {categories.map((category) => (
        <div>
          <div className="gap-2">
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategory === category}
                value={category}
                onChange={() => handleCategoryChange(category)}
                className="rounded-sm"
              />

              {category}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
