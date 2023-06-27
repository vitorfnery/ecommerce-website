const ProductsFilterBtns = ({ setItems, menuItems, filterItems, products }) => {
  return (
    <div
      className="
                flex justify-start md:justify-center flex-wrap gap-4 
                font-primary
                "
    >
      <button
        className="uppercase rounded bg-black text-white py-2 px-4"
        onClick={() => setItems(products)}
      >
        All
      </button>
      {menuItems.map((item, index) => (
        <button
          className="uppercase rounded bg-black text-white py-2 px-4"
          key={index}
          onClick={() => filterItems(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ProductsFilterBtns;
