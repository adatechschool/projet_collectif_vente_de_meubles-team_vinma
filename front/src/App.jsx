import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//import Components / Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  // const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // const handleToken = (token) => {
  //   if (token) {
  //     Cookies.set("userToken", token, { expires: 7 });
  //     setUserToken(token);
  //   } else {
  //     Cookies.remove("userToken");
  //     setUserToken(null);
  //   }
  // };


  return (<>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
