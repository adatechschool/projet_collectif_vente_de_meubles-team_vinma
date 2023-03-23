import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Product = ({data, readOnePostData}) => {

  const [images, setImages] = useState({
    img1 : "https://cdn.laredoute.com/products/d/4/5/d4530e1ce3533878d608a9e64f41632d.jpg?width=900&dpr=1",
    img2 : "https://cdn.laredoute.com/products/d/9/d/d9d93d04f079ae3047cdbd3346aabff2.jpg?width=900&dpr=1",
    img3 : "https://cdn.laredoute.com/products/8/2/d/82d95ac3f8bec3045a834929c3310600.jpg?width=900&dpr=1",
    img4 : "https://cdn.laredoute.com/products/9/9/1/9914f4e6061056bce1837cc29fb0049f.jpg?width=900&dpr=1"
})

const [activeImg, setActiveImage] = useState(images.img1)

  return ( 
    <>

    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>

             <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                {/* <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div> */}
            </div> 
            {/* ABOUT */}
  
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-amber-400 font-semibold'>title</span>
                    <h1 className='text-3xl font-bold'>category</h1>
                </div>
                <p className='text-gray-700'>
                discription
                </p>
                <h6 className='text-2xl font-semibold'>price</h6>
                <div className='flex flex-row items-center gap-12'>
                    <button className=' bg-amber-400 hover:bg-yellow-600 text-white font-semibold py-3 px-16 rounded-md h-full'>Add to Cart</button>
                </div>;
            </div>
            </div>
    
    </>
  );

  
};





export default Product;
