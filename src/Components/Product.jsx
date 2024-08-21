/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";

const Product = ({ elem }) => {
  const [products, setProducts, cart, setCart, amountTotal, setAmountTotal] =
    useContext(ProductContext);
  const addToCart = (id, price) => {
    setAmountTotal((prev) => prev + price);

    setCart((prev) => [
      ...prev,
      ...products.filter((elem) => {
        return elem.id === id;
      }),
    ]);
    alert("New item added to cart ");
  };
  return (
    <div className="border-black border rounded-md shadow-lg py-3 overflow-hidden px-2 w-1/6 flex gap-10 flex-col h-1/4 ">
      <Link to={`/Details/${elem.id}`} className="w-1/2 h-1/2 flex mx-auto">
        <div
          className="hover:scale-110 w-full bg-contain bg-no-repeat  bg-center "
          style={{
            backgroundImage: `url(${elem.image})`,
          }}
        ></div>
      </Link>
      <div className="text-black cursor-pointer">{elem.title}</div>

      <button
        onClick={() => addToCart(elem.id, elem.price)}
        className="w-fit px-4 py-2 border-green-500 border text-green-500 bg-green-50 text-start "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
