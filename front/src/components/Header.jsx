import { useState } from "react";
import {useNavigate} from "react-router-dom";

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

const Header = ({ cart, setCart, removeFromCart, isSearched }) => {

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [searched, setSearched] = useState('');
  const navigate = useNavigate();

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <>
      <div className="global-header border-b-[1px] sticky top-0 z-50">
        <div className="flex justify-between bg-white w-full h-20 flex items-center px-4">
                        
          <div className="left">
            
            <img src={Logo} alt="" className="w-12 h-12 hover:cursor-pointer" 
            onClick={() => {
              navigate("/");
            }}
            />
            
          </div>
          <div className="center">   
                <div class="relative">
                    <input type="search"  className=" outline-0 w-48 lg:w-96 block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search category" value={searched} onChange={(event)=>setSearched(event.target.value)}/>
                    <button className="text-white absolute right-2.5 bottom-2.5 bg-amber-400 hover:bg-black font-medium rounded-lg text-sm px-4 py-2" onClick={()=>{isSearched(searched)}}>Search</button>
                </div>
          </div>
          <div className="right">
            <ul className="flex items-center">
              
              <li>
                <button className="rounded-lg py-2 px-10  mr-4 bg-amber-400 hover:bg-black duration-300 text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
                onClick={() => {
                  navigate("/publication");
                }}
                >Sell now</button>
              </li>
              <li>
                <MagnifyingGlassIcon className="h-6 w-6 text-slate-900 mr-3" />
              </li>
              <li>
                <UserIcon className="h-6 w-6 text-slate-900 mr-3 hover:cursor-pointer" 
                onClick={() => {
                  if (localStorage.getItem("id") === null) {
                    navigate("/login");
                  } else{
                    navigate("/account");
                  }
                }}/>
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
