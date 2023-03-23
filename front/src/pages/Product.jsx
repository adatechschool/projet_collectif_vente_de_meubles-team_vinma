import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// import components
import Header from "../components/Header";

const Product = ({cart, setCart, removeFromCart, addToCart, data}) => {
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
        {/* {data.map((post)=>{
          
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
          } */}
      </div>

      
      </div>
    </>
    
  );
};

export default Product;


