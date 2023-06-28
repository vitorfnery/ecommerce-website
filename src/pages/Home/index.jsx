import { useContext, useEffect, useState } from "react";
import Product from "~components/Product";
import Hero from "~containers/Hero";
import ProductsFilter from "~containers/ProductsFilter";
import { ProductContext } from "~contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(products);
  }, [products]);
  const menuItems = [...new Set(products.map((item) => item.category))];
  const filterItems = (curcat) => {
    const newItems = products.filter((newItem) => {
      return newItem.category === curcat;
    });
    setItems(newItems);
  };

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="w-full mb-4">
          <ProductsFilter
            setItems={setItems}
            menuItems={menuItems}
            filterItems={filterItems}
            products={products}
          />
        </div>
        <div className="container mx-auto">
          <div
            className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] 
          max-w-sm mx-auto md:max-w-none md:mx-0
                      "
          >
            {items.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
