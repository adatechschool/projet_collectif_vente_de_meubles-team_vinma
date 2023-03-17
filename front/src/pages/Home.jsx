import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };

      const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slideToSlide: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slideToSlide: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slideToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slideToSlide: 1
        }
      };
    return (
        <>
        <div className="Home w-[100vw] h-[125vh]  mt-10 mr-10 ml-10"> 

        {/* Carousel pour category menu */}

          <Carousel responsive={responsive}>
              <div className="card">
                <img className="product--image rounded-full border border-gray-100 shadow-lg w-24 h-24"
                    src="https://static.galerieslafayette.com/media/3004086/300408683792/G_300408683792_1212_VFP_1.jpg"
                    alt="product image"/>
                    <span className="ml-8"> Bed </span>     
              </div>
              <div className="card">
                <img className="product--image rounded-full border border-gray-100 shadow-lg w-24 h-24"
                    src="https://cdn.laredoute.com/products/0/0/9/0093e7dd5f1b25cd1fb79dde54a7ca4f.jpg?width=900&dpr=1"
                    alt="product image"/>
                    <span className="ml-5">Cabinet</span>
              </div>
              <div className="card">
                  <img className="product--image rounded-full border border-gray-100 shadow-lg w-24 h-24"
                      src="https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/canape-clic-clac-3-places-en-velours-vert-1000-16-15-198168_1.jpg"
                      alt="product image"/>
                      <span className="ml-7">Sofa</span>
              </div>
              <div className="card">
                  <img className="product--image rounded-full border border-gray-100 shadow-lg w-24 h-24"
                      src="https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/chaise-vintage-en-velours-vieux-rose-et-metal-imitation-chene-1000-4-30-210073_1.jpg"
                      alt="product image"/>
                      <span className="ml-7">Chair</span>
              </div>
              <div className="card">
                  <img className="product--image rounded-full border border-gray-100 shadow-lg w-24 h-24"
                      src="https://cdn.laredoute.com/products/1/8/5/185539d0b362ea30b16462b30d8f1e20.jpg?width=700&dpr=1"
                      alt="product image"/>
                      <span className="ml-7" >Table</span>
              </div>
              <div className="card">
                  <img className="product--image rounded-full border border-gray-100 shadow-lg w-24 h-24"
                      src="https://cdn.laredoute.com/products/c/4/0/c400ea36ee52792fc307da3f3eaee21c.jpg?width=800&dpr=1"
                      alt="product image"/>
                      <span className="ml-6">Others</span>
              </div>
          </Carousel>

              <h2 className= "font-medium text-4xl text-stone-800 mt-10 mr-10 ml-10">you may also like</h2>

          {/* adding products */}
          <section className=" mt-6 mr-10">
            <Carousel responsive={responsive2}>
              <div className="card mb-8 mt-8 ml-8 bg-white">
                    <img className="w-[200px] h-[200px] object-cover pl-6" 
                        src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
                        alt="img"/>
                        <div className="pl-4 pr-4 pb-4">
                          <h2 className="font-bold">Title product</h2>
                          <h2 className= "text-4xl pt-2 pb-2">22 €</h2>
                          <button
                            type="submit"
                            className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                           >
                            Add to cart
                          </button>
                        </div>
              </div>
              <div className="card mb-8 mt-8 ml-8 bg-white">
                    <img className="w-[200px] h-[200px] object-cover pl-6" 
                        src="https://static.tikamoon.com/product_photos/3965_A_HD_001/1200-1200-armoire-de-rangement-en-pin-et-cannage-ninon.webp?t=1665709167"
                        alt="img"/>
                        <div className="pl-4 pr-4 pb-4">
                          <h2 className="font-bold">Title product</h2>
                          <h2 className= "text-4xl pt-2 pb-2">22 €</h2>
                          <button
                            type="submit"
                            className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                           >
                            Add to cart
                          </button>
                        </div>
              </div>
              <div className="card mb-8 mt-8 ml-8 bg-white">
                    <img className="w-[200px] h-[200px] object-cover pl-6" 
                        src="https://static.tikamoon.com/product_photos/1625__1200_000/1200-1200-chaise-en-teck-massif-jonak.webp?t=1665573674"
                        alt="img"/>
                        <div className="pl-4 pr-4 pb-4">
                          <h2 className="font-bold">Title product</h2>
                          <h2 className= "text-4xl pt-2 pb-2">22 €</h2>
                          <button
                            type="submit"
                            className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                           >
                            Add to cart
                          </button>
                        </div>
              </div>
              <div className="card mb-8 mt-8 ml-8 bg-white">
                    <img className="w-[200px] h-[200px] object-cover pl-6" 
                        src="https://static.tikamoon.com/product_photos/835__HD_002/1200-1200-table-en-teck-massif-coffee-tek-6-8-pers.webp?t=1665819563"
                        alt="img"/>
                        <div className="pl-4 pr-4 pb-4">
                          <h2 className="font-bold">Title product</h2>
                          <h2 className= "text-4xl pt-2 pb-2">22 €</h2>
                          <button
                            type="submit"
                            className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                           >
                            Add to cart
                          </button>
                        </div>
              </div>
              <div className="card mb-8 mt-8 ml-8 bg-white">
                    <img className="w-[200px] h-[200px] object-cover pl-6" 
                        src="https://cdn1.bobochicparis.com/197455-thickbox_default/lit-180x200-cm-oceane-avec-lattes-massives-tissu-texture.jpg"
                        alt="img"/>
                        <div className="pl-4 pr-4 pb-4">
                          <h2 className="font-bold">Title product</h2>
                          <h2 className= "text-4xl pt-2 pb-2">22 €</h2>
                          <button
                            type="submit"
                            className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                           >
                            Add to cart
                          </button>
                        </div>
              </div>
              </Carousel>

        {/* footer section */}
        </section>
        <section className="flex flex-col justify-center items-center m-8 space-x-4 font-normal">
          <div className="p-4">
          <img className="ml-[100px]"
          src="https://assets.made-in-meubles.com/static/version1678969329/frontend/Mim/wex/fr_FR/images/footer/phone.svg"/> Secure and confidential payment</div>
          <div className="p-5">
          <img className="ml-[60px]"
          src="https://assets.made-in-meubles.com/static/version1678969329/frontend/Mim/wex/fr_FR/images/footer/lock.svg"/>
            Delivery in France</div>
          <div className="p-3">
          <img className="ml-[80px]"
          src="https://assets.made-in-meubles.com/static/version1678969329/frontend/Mim/wex/fr_FR/images/footer/truck.svg"/>
            Reactive technical support</div>
        </section>
        </div>  
      
        </>
    )
}

export default Home;

{/* <>
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
    </> */}