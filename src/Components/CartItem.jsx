import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";

const CartItem = ({ elem }) => {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts, cart, setCart, amountTotal, setAmountTotal] =
    useContext(ProductContext);
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
    setAmountTotal((prev) => prev + elem.price);
  };
  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      setAmountTotal((prev) => prev - elem.price);
    }
  };

  const amount = (elem.price * quantity).toFixed(2);

  return (
    <>
      <div className=" flex h-fit mb-4 py-6 ">
        <img
          className="w-1/5 border-0 border-r-2 object-contain  px-12"
          src={elem.image}
          alt=""
        />
        <div className="w-4/5   flex font-bold text-xl items-center gap-4 tracking-tight">
          <h1 className="w-1/4 border-0 border-r-2 h-full justify-center flex items-center text-center px-4">
            {elem.title}
          </h1>
          <div className="w-1/4 border-0 border-r-2 h-full flex items-center justify-center gap-8  text-center ">
            <button
              className="border border-black px-2 "
              onClick={reduceQuantity}
            >
              -
            </button>
            <h1>{quantity}</h1>
            <button className="border border-black px-2 " onClick={addQuantity}>
              +
            </button>
          </div>
          <h1 className="w-1/4 border-0 border-r-2 h-full justify-center flex items-center">
            {elem.price}
          </h1>
          <h1 className="w-1/4  text-center ">{amount}</h1>
        </div>
      </div>
    </>
  );
};

export default CartItem;
