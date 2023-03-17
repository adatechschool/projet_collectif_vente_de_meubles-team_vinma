import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//import Components / Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Publication from "./pages/Publication";
import Home from "./pages/Home"
import Product from "./pages/Product";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/publication" element={<Publication/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>

      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
