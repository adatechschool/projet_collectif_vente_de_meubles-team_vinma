import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Product = () => {

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

  const [images, setImages] = useState({
    img1 : "https://cdn.laredoute.com/products/d/4/5/d4530e1ce3533878d608a9e64f41632d.jpg?width=900&dpr=1",
    // img2 : "https://cdn.laredoute.com/products/d/9/d/d9d93d04f079ae3047cdbd3346aabff2.jpg?width=900&dpr=1",
    // img3 : "https://cdn.laredoute.com/products/8/2/d/82d95ac3f8bec3045a834929c3310600.jpg?width=900&dpr=1",
    // img4 : "https://cdn.laredoute.com/products/9/9/1/9914f4e6061056bce1837cc29fb0049f.jpg?width=900&dpr=1"
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
                    <span className=' text-amber-400 font-semibold'>Canapé au lit</span>
                    <h1 className='text-3xl font-bold'>Canapé</h1>
                </div>
                <p className='text-gray-700'>
                Les bois durs sont considérés comme la qualité maximale et sont les plus chers. Leurs couleurs naturelles varient des bois les plus profonds aux bois les plus légers et ils peuvent être teints ou peints pour plus de diversité.
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <button className=' bg-amber-400 hover:bg-yellow-600 text-white font-semibold py-3 px-16 rounded-md h-full'>Add to Cart</button>
                </div>
            </div>
        </div>

      <h2 className= "font-medium text-4xl text-stone-800 mt-10 mr-10">you may also like</h2>

{/* adding products */}
      <section>
          {<Carousel responsive={responsive}>
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
</Carousel>}
      </section>
    
    </>
  );

  
};





export default Product;
