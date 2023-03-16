import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//import Components / Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Product from "./pages/Product";


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
