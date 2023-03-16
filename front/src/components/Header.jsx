import { useState } from "react";

// import assets
import Logo from "../img/logo-hema.svg";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// import components
import Cart from "./Cart";

const Header = ({ cart, setCart, removeFromCart }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <>
      <div className="global-header">
        <div className="flex justify-between bg-white w-full h-20 flex items-center px-4">
          <div className="left">
            <img src={Logo} alt="" className="w-12 h-12" />
          </div>
          <div className="right">
            <ul className="flex">
              <li>
                <MagnifyingGlassIcon className="h-6 w-6 text-slate-900 mr-3" />
              </li>
              <li>
                <UserIcon className="h-6 w-6 text-slate-900 mr-3" />
              </li>
              {cart.length ? (
              <li  className="flex">
             
                <ShoppingBagIcon
                  className="h-6 w-6 text-slate-900 cursor-pointer mr-6"
                  onClick={toggleCart}
                />
                  <p className="absolute ml-3 -mt-1 rounded-full w-5 h-5 text-sm bg-yellow-400 text-center">{cart.length}</p>
               
              </li>) :   <ShoppingBagIcon
                  className="h-6 w-6 text-slate-900 cursor-pointer mr-6"
                  onClick={toggleCart}
                /> }
              <li>
                <Bars3Icon className="h-6 w-6 text-slate-900" />
              </li>
            </ul>
          </div>
        </div>
        {cartIsOpen && (
          <Cart
            toggleCart={toggleCart}
            cart={cart}
            setCart={setCart}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </>
  );
};

export default Header;
