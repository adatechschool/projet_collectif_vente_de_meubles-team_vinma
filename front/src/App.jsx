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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/read-all-posts?category=${search}&title=${search}`);
      setData(response.data);
      setIsLoading(true)
    };
    fetchData();
  }, [search]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} category={category} setCategory={setCategory} search={search} setSearch={setSearch}/>} /> 
          <Route path="/category" element={<Category data={data} category={category} />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/product/:id" element={<Product data={data}/>} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <Pagination />
    </>
  );

}

export default App;
