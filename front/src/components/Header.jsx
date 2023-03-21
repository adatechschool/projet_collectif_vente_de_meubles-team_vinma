import { useState } from "react";

// import assets
import Logo from "../img/logo-vinma.png";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// import components
import Cart from "./Cart";
import Sidebar from "../pages/Sidebar";

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
            <img src={Logo} alt="" className="w-13 h-13 mt-4" />
          </div>
          <div className="right">
            <ul className="flex">
              <li>
                <MagnifyingGlassIcon className="h-6 w-6 text-slate-900 mr-3" />
              </li>
              <li>
                <a href="/account">
                  <UserIcon className="h-6 w-6 text-slate-900 mr-10" />
                </a>
              </li>
              <Sidebar></Sidebar>
              {/* {cart.length ? (
              <li  className="flex">
             
                <ShoppingBagIcon
                  className="h-6 w-6 text-slate-900 cursor-pointer mr-6 -m-2 p-2 text-gray-400 hover:text-gray-500 sm:"
                  onClick={toggleCart}
                />
                  <p className="absolute ml-3 -mt-1 rounded-full w-5 h-5 text-sm bg-yellow-400 text-center">{cart.length}</p>
               
              </li>) :   <ShoppingBagIcon
                  className="h-6 w-6 text-slate-900 cursor-pointer mr-6"
                  onClick={toggleCart}
                /> } */}
              {/* <li>
                <Bars3Icon className="h-6 w-6 text-slate-900" />
              </li> */}
            </ul>
          </div>
        </div>
        {cartIsOpen && (
          <Sidebar
          />
        )}
      </div>
    </>
  );
};

export default Header;
