// import packages
import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

// import assets
import Meuble from "../img/meuble01.jpg";

const Cart = ({ toggleCart, cart, removeFromCart }) => {
  return (
    <>
      <div className="cart bg-white  mx-4 mt-4  p-5">
        <h1 className="text-slate-900 text-3xl font-bold">My cart </h1>
        <div className="flex items-center mt-3">
          <ChevronLeftIcon className="h-5 w-5" />
          <p className="cursor-pointer" onClick={toggleCart}>
            continuer mon shopping
          </p>
        </div>
      </div>
      {cart.map((product) => {
        return (
          <div className="flex flex-col cart bg-white  mx-4 mt-[1px] p-5">
            <div className="flex justify-end">
              <TrashIcon className="h-6 w-6" onClick={removeFromCart} />
            </div>
            <div className="flex items-end justify-between mt-5">
              <img
                src={product.picture}
                alt=""
                className="w-24 h-24 object-cover"
              />
              <div className="text-product ">
                <p className="font-bold">{product.title}</p>
                <p className="text-sm w-[230px] mt-2">{product.description}</p>
              </div>
              <div className="price text-xl font-bold">{product.price}</div>
            </div>
          </div>
        );
      })}

      <div className="flex flex-col cart bg-white  mx-4 mt-[1px] p-5">
        <div className="flex items-end justify-between">
          <p className="font-bold">Total</p>
          <div className="price text-3xl font-bold">9.38 €</div>
        </div>
        <button className="bg-orange-400 text-white p-2 mt-7 rounded">
          Commander
        </button>
        <div className="flex items-center mt-10">
          <ChevronLeftIcon className="h-5 w-5" />
          <p className="cursor-pointer" onClick={toggleCart}>
            continuer mon shopping
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
