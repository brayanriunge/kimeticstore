import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

type props = {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onSelectedCategory,
}: props) {
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const categories = [
    "Cars",
    "Gem",
    "Art",
    "Coffee",
    "Tea",
    "Electronics",
    "Armored Cars",
    "Crops",
    "Mineral",
    "Oil",
    "Meat",
  ];

  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      onSelectedCategory("");
    } else {
      onSelectedCategory(category);
    }
  };
  return (
    <>
      {isAboveMediaScreens ? (
        <div className="md:flex items-center justify-between gap-4  text-md font-serif sticky p-4 top-0">
          {categories.map((category) => (
            <div>
              <div className=" flex gap-2">
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
      ) : (
        <div className="grid grid-cols-2 gap-6 p-2 mt-11">
          {categories.map((category) => (
            <div>
              <div className=" flex gap-2">
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
      )}
    </>
  );
}
