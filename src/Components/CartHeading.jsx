const CartHeading = () => {
  return (
    <div className="w-full justify-between flex">
      <h1 className="w-1/5 text-center border-0 border-collapse border-r-2 border-l-4">
        Item
      </h1>
      <h1 className="w-1/5 text-center border-0 border-collapse border-x-2">
        Name
      </h1>
      <h1 className="w-1/5 text-center border-0 border-collapse border-x-2">
        Quantity
      </h1>
      <h1 className="w-1/5 text-center border-0 border-collapse border-x-2">
        Price
      </h1>
      <h1 className="w-1/5 text-center border-0 border-collapse border-x-2 border-r-4">
        Total
      </h1>
    </div>
  );
};

export default CartHeading;
