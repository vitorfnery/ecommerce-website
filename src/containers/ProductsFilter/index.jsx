import { useState } from "react";
import FilterButton from "~components/FilterButton";
import { FILTER_ALL } from "~/constants";
import { v4 } from "uuid";

const ProductsFilter = ({ setItems, menuItems, filterItems, products }) => {
  const idGenerator = v4;
  const filterAll = FILTER_ALL;
  const [selectedCategory, setSelectedCategory] = useState(filterAll);
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div
      className="
                flex justify-center flex-wrap gap-4 md:gap-10 lg:gap-16
                font-primary
                "
    >
      <FilterButton
        onClick={() => {
          setItems(products), handleFilter("All");
        }}
        content="All"
        selectedCategory={selectedCategory}
      />
      {menuItems.map((item) => (
        <FilterButton
          onClick={() => {
            filterItems(item), handleFilter(item);
          }}
          key={idGenerator()}
          content={item}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
};
export default ProductsFilter;
