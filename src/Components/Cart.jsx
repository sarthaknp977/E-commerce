import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import CartItem from "./CartItem";
import CartHeading from "./CartHeading";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts, cart, setCart, amountTotal, setAmountTotal] =
    useContext(ProductContext);

  return (
    <div className="w-full  flex justify-center">
      <div className=" w-2/3  flex flex-col gap-10 justify-center py-40">
        <h1 className="  text-6xl font-bold">Cart</h1>
        <CartHeading />
        <div className="  flex flex-col overflow-y-scroll h-[60vh]">
          {cart.map((elem) => {
            return <CartItem key={elem.id} elem={elem} />;
          })}
        </div>

        <div className="w-full flex gap-3 border-0 border-black border-opacity-30 py-4 border-t-2 flex-col items-end">
          <h1 className="w-fit border border-green-500 p-4">
            Total Cost: {amountTotal.toFixed(2)}
          </h1>
          <Link
            to="/CheckOut"
            className="w-fit border border-green-500 text-start p-4"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
