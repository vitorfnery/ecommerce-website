import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "~contexts/CartContext";
import { ProductContext } from "~contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:h-screen">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="
                        max-w-[150px] md:max-w-[200px] lg:max-w-sm 
                        max-h-[250px] lg:max-h-sm
                        "
              src={image}
              alt={description}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="
                        first-letter text-xl lg:text-[26px] 
                        font-medium  mb-4 max-w-[450px] mx-auto lg:mx-0
                        "
            >
              {title}
            </h1>
            <div className="text-base md:text-lg lg:text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8 text-sm">{description}</p>
            <button
              className="mb-3 bg-primary py-4 px-8 text-white text-base"
              onClick={() => addToCart(product, product.id)}
            >
              Add to chart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
