import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//import Components / Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Publication from "./pages/Publication";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Confirmation from "./pages/Confirmation.jsx";
import Category from "./pages/Category";
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    const newCart = [...cart];
    const productExist = newCart.find((elem) => elem._id === product._id);

    if (productExist) {
      console.log("le produit est deja dans la panier");
    } else {
      newCart.push(product);
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const productInTab = newCart.find((elem) => elem._id === product._id);
    const index = newCart.indexOf(productInTab);
    newCart.splice(index, 1);
    setCart(newCart);
    saveCart(newCart);
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/read-all-posts?category=${search}&title=${search}`);
      setData(response.data);
      setIsLoading(true)
    };

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    fetchData();
  }, [search]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} category={category} setCategory={setCategory} search={search} setSearch={setSearch} cart={cart}  setCart={setCart} removeFromCart = {removeFromCart} addToCart = {addToCart}/>} /> 
          <Route path="/category" element={<Category data={data} category={category} cart={cart}  setCart={setCart} removeFromCart = {removeFromCart} addToCart = {addToCart} />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account cart={cart}  setCart={setCart} removeFromCart = {removeFromCart} addToCart = {addToCart}/>} />
          <Route path="/publication" element={<Publication cart={cart}  setCart={setCart} removeFromCart = {removeFromCart} addToCart = {addToCart}/>} />
          <Route path="/product/:id" element={<Product data={data} cart={cart}  setCart={setCart} removeFromCart = {removeFromCart} addToCart = {addToCart}/>} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      {/* <Pagination /> */}
    </>
  );

}

export default App;
