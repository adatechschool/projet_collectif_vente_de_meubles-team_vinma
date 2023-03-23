import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../components/Header";

const Product = ({data}) => {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [displayImg, setDisplayImg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/read-one-post/${params.id}`
      );
      setPostData(response.data);
      setIsLoading(false);
      setDisplayImg(response.data.images[0].secure_url);
    };
    fetchData();
  }, [params.id]);

  console.log(postData);

  return isLoading ? (
    <p>Loading....</p>
  ) : (
    <>
    <Header cart={[]} setCart={()=>{}} removeFromCart={()=>{}}/>
    <div className="h-screen">
      <div className="flex justify-between space-x-8 px-8 py-8">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={displayImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded"
          />
          <div className="flex space-x-4">
          {postData.images.map(img=>{
            return (
              <div className="w-24">
              <img
            src={img.secure_url}
            alt=""
            className="w-full h-full aspect-square object-cover rounded cursor-pointer"
            onClick={()=>{setDisplayImg(img.secure_url)}}
          />
          </div>
            )
            })}
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-amber-400 font-semibold">{postData.category}</span>
            <h1 className="text-3xl font-bold">{postData.title}</h1>
          </div>
          <p className="text-gray-700">
          {postData.description}
          </p>
          <h6 className="text-2xl font-semibold">{postData.price} €</h6>
          <div className="flex flex-row items-center gap-12">
            <button className=" bg-amber-400 hover:bg-yellow-600 text-white font-semibold py-3 px-16 rounded-md h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>



      <h2 className="font-medium text-4xl text-stone-800 mt-10 mr-10">
        you may also like
      </h2>
      <div>
        {data.map((post)=>{
          
          // if (post.category ==== postData.category) {

          // }
            return (
              <>
            <div>
              {post.title}
            </div>
            </>
          )
        
            }
          }
      </div>

      
      </div>
    </>
    
  );
};

export default Product;


{/* <section>
        {
          <Carousel responsive={responsive}>
            <div className="card mb-8 mt-8 ml-8 bg-white">
              <img
                className="w-[200px] h-[200px] object-cover pl-6"
                src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
                alt="img"
              />
              <div className="pl-4 pr-4 pb-4">
                <h2 className="font-bold">Title product</h2>
                <h2 className="text-4xl pt-2 pb-2">22 €</h2>
                <button
                  type="submit"
                  className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="card mb-8 mt-8 ml-8 bg-white">
              <img
                className="w-[200px] h-[200px] object-cover pl-6"
                src="https://static.tikamoon.com/product_photos/3965_A_HD_001/1200-1200-armoire-de-rangement-en-pin-et-cannage-ninon.webp?t=1665709167"
                alt="img"
              />
              <div className="pl-4 pr-4 pb-4">
                <h2 className="font-bold">Title product</h2>
                <h2 className="text-4xl pt-2 pb-2">22 €</h2>
                <button
                  type="submit"
                  className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="card mb-8 mt-8 ml-8 bg-white">
              <img
                className="w-[200px] h-[200px] object-cover pl-6"
                src="https://static.tikamoon.com/product_photos/1625__1200_000/1200-1200-chaise-en-teck-massif-jonak.webp?t=1665573674"
                alt="img"
              />
              <div className="pl-4 pr-4 pb-4">
                <h2 className="font-bold">Title product</h2>
                <h2 className="text-4xl pt-2 pb-2">22 €</h2>
                <button
                  type="submit"
                  className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="card mb-8 mt-8 ml-8 bg-white">
              <img
                className="w-[200px] h-[200px] object-cover pl-6"
                src="https://static.tikamoon.com/product_photos/835__HD_002/1200-1200-table-en-teck-massif-coffee-tek-6-8-pers.webp?t=1665819563"
                alt="img"
              />
              <div className="pl-4 pr-4 pb-4">
                <h2 className="font-bold">Title product</h2>
                <h2 className="text-4xl pt-2 pb-2">22 €</h2>
                <button
                  type="submit"
                  className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="card mb-8 mt-8 ml-8 bg-white">
              <img
                className="w-[200px] h-[200px] object-cover pl-6"
                src="https://cdn1.bobochicparis.com/197455-thickbox_default/lit-180x200-cm-oceane-avec-lattes-massives-tissu-texture.jpg"
                alt="img"
              />
              <div className="pl-4 pr-4 pb-4">
                <h2 className="font-bold">Title product</h2>
                <h2 className="text-4xl pt-2 pb-2">22 €</h2>
                <button
                  type="submit"
                  className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="card mb-8 mt-8 ml-8 bg-white">
              <img
                className="w-[200px] h-[200px] object-cover pl-6"
                src="https://cdn1.bobochicparis.com/197455-thickbox_default/lit-180x200-cm-oceane-avec-lattes-massives-tissu-texture.jpg"
                alt="img"
              />
              <div className="pl-4 pr-4 pb-4">
                <h2 className="font-bold">Title product</h2>
                <h2 className="text-4xl pt-2 pb-2">22 €</h2>
                <button
                  type="submit"
                  className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Carousel>
        }
      </section> */}