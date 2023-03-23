import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect} from "react";
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

function App() {
  const [data, setData] = useState([]);
  // const [readOnePostData, setReadOnePostData] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/read-all-posts");
      setData(response.data);
    };

    // const fetchReadOnePostData = async () => {
    //   const response = await axios.get(`http://localhost:8080/read-one-post/${id}`);
    //   setReadOnePostData(response.data)
    //   console.log(readOnePostData)
    // }

    fetchData();
    // fetchReadOnePostData();
  }, []);
//   fetchData();
//   if (params && params.id) {
//     fetchReadOnePostData();
//   }
// }, [params]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/publication" element={<Publication />} />
          {/* <Route path="/product" element={<Product data={data} readOnePostData={readOnePostData} />} /> */}
          <Route path="/product" element={<Product/>} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
