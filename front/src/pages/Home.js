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
    // console.log(productExist);
    if (productExist) {
      console.log("le produit est deja dans la panier");
    } else {
      newCart.push(product);
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const productInTab = newCart.find((elem) => elem.id === product.id);
    const index = newCart.indexOf(productInTab);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const products = [
    {
      id: "sfkgjhfdklhdkljhgdkf",
      title: "Meuble TV en teck",
      description:
        "Meuble tv, portes coulissante, niche et rangement vinyles bleu canard et teck.",
      picture: <img className="h-20" src={Meuble01} alt="" />,
      price: 9.38,
    },
    {
      id: "fghpoknighpokghpk",
      title: "Meuble TV en teck",
      description:
        "Meuble tv, portes coulissante, niche et rangement vinyles bleu canard et teck.",
      picture: <img className="h-20" src={Meuble01} alt="" />,
      price: 9.38,
    },
    {
      id: "cnvbfxjvhbyttyytytyty",
      title: "Meuble TV en teck",
      description:
        "Meuble tv, portes coulissante, niche et rangement vinyles bleu canard et teck.",
      picture: <img className="h-20" src={Meuble01} alt="" />,
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
                <div>{product.picture}</div>
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
