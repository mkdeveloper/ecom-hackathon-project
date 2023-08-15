"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const AddtoCartProduct = () => {
  const [qty, setQty] = useState(1);

  const subtract = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-5 text-2xl font-bold mt-8">
        <p>Quantity:</p>
        <button
          onClick={subtract}
          className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
        >
          -
        </button>
        {qty}
        <button
          onClick={() => setQty(qty + 1)}
          className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
        >
          +
        </button>
      </div>
      <button className="flex justify-center items-center gap-3 bg-[#212121] text-white px-6 py-2 mt-5 disabled:cursor-not-allowed disabled:bg-gray-500">
        <FaShoppingCart size={25} />
        Add to Cart
      </button>
      <Toaster />
    </>
  );
};
export default AddtoCartProduct;
