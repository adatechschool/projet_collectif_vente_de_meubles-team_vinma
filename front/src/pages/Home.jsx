import { useState, useEffect } from "react";

//import components
import Header from "../components/Header";

//import assets
import Meuble01 from "../img/meuble01.jpg";

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart];
    const productExist = newCart.find((elem) => elem.id === product.id);
 
    if (productExist) {
      console.log("le produit est deja dans la panier");
    } else {
      newCart.push(product);
    }
    setCart(newCart);
    saveCart(newCart)
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const productInTab = newCart.find((elem) => elem.id === product.id);
    const index = newCart.indexOf(productInTab);
    newCart.splice(index, 1);
    setCart(newCart);
    saveCart(newCart)
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const products = [
    {
      id: "sfkgjhfdklhdkljhgdkf",
      title: "Meuble TV en teck",
      description:
        "Meuble tv, portes coulissante, niche et rangement vinyles bleu canard et teck.",
      picture: { Meuble01 },
      price: 9.38,
    },
    {
      id: "fghpoknighpokghpk",
      title: "Meuble TV en teck",
      description:
        "Meuble tv, portes coulissante, niche et rangement vinyles bleu canard et teck.",
      picture: { Meuble01 },
      price: 9.38,
    },
    {
      id: "cnvbfxjvhbyttyytytyty",
      title: "Meuble TV en teck",
      description:
        "Meuble tv, portes coulissante, niche et rangement vinyles bleu canard et teck.",
      picture: { Meuble01 },
      price: 9.38,
    },
  ];

  return (
    <>
      <div className="bg-beige h-screen">
        <Header cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
        <div className="product flex flex-row m-5">
          {products.map((product, index) => {
            return (
              <div
                className="bg-white p-5 m-2"
                onClick={() => {
                  addToCart(product);
                }}
                key={product.id}
              >
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <img className="h-20" src={product.picture.Meuble01} alt="" />,
                <p>{product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
