import React, { useContext, useRef } from "react";
import { ProductContext } from "../utils/Context";

const CheckOut = () => {
  const [products, setProducts, cart, setCart, amountTotal, setAmountTotal] =
    useContext(ProductContext);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    alert("Orders Places Successfully");
  };
  return (
    <div className="w-full h-screen py-12">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action=""
        className="w-9/12 mx-auto flex flex-col gap-12 py-12 px-9"
      >
        <div className="w-full  flex gap-3 flex-col ">
          <label htmlFor="email" className="inline-block  w-1/4 p-3 ">
            <span>Email Address</span>
          </label>
          <input
            className="inline-block outline-none border w-2/3 p-3 "
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full flex gap-3 flex-col ">
          <label htmlFor="number" className="inline-block  w-1/4 p-3 ">
            <span>Contact Number </span>
          </label>
          <input
            className="inline-block outline-none border w-2/3 p-3"
            type="number"
            name="number"
            id="number"
            placeholder="Enter your number"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <label htmlFor="email">
            <span className="inline-block  w-1/4 p-3">Address</span>
          </label>
          <textarea
            className="resize-none border outline-none  w-1/2 p-3"
            rows={6}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your address1"
          />
        </div>

        <input
          type="submit"
          value="Complete Order"
          className=" px-4 py-3 border cursor-pointer border-green-500 w-fit text-start"
        />
      </form>
    </div>
  );
};

export default CheckOut;
