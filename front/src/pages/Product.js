import React, { useState } from "react";

const Product = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section>
        <div class="flex p-6 ">
          <img src={require("./meuble.jpg")} alt="photo" class="w-3/5 h-full" />
          <div class="w-2/5">
            <h2 class="font-medium text-4xl text-stone-800 m-3">NameProduct</h2>
            <h1 class="font-medium text-6xl text-stone-800 m-3 ">Price.€</h1>
            <button
              type="submit"
              class="hover:bg-amber-500 bg-amber-400 w-4/5 m-3 p-4 text-lg rounded"
            >
              Add to Cart
            </button>
            <h2 class="font-medium text-4xl text-stone-800 mx-3">
              Product description
            </h2>
            <p class="text-xl text-stone-800 mx-3">
              Les bois durs sont considérés comme la qualité maximale et sont
              les plus chers. Leurs couleurs naturelles varient des bois les
              plus profonds aux bois les plus légers et ils peuvent être teints
              ou peints pour plus de diversité.
            </p>
            <button
              onClick={() => setToggle(!toggle)}
              class="font-medium text-4xl text-stone-800 mx-3 m-3 w-full flex border-b-[1px] border-gray-400"
            >
              Details
            </button>
            {toggle && (
              <div class="text-xl text-stone-800 mx-3">
                ICI sont les détails : matière, état, couleur ... Les bois durs
                sont considérés comme la qualité maximale et sont les plus
                chers. Leurs couleurs naturelles varient des bois les plus
                profonds aux bois les plus légers et ils peuvent être teints ou
                peints pour plus de diversité.
              </div>
            )}
          </div>
        </div>
      </section>

      <section class="bg-gray-200">
        <div>
          <h2 class="font-medium text-4xl text-stone-800 m-4 pt-4">
            You will like also
          </h2>
          <div class="flex m-8 text-center pb-4 ">
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800 ">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32 ">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800 ">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32 ">22.€</h2>
            </div>
          </div>
        </div>
        <div>
          <h2 class="font-medium text-4xl text-stone-800 m-4 pt-4">
            Others also liked
          </h2>
          <div class="flex m-8 text-center pb-8">
            <div class="border w-1/5 h-85 mx-4 bg-white p-4 ">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32 ">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800 ">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32 ">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800 ">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32 ">22.€</h2>
            </div>
            <div class="border w-1/5 h-85 mx-4 bg-white p-4">
              <a href="#" target="_blank">
                <img src={require("./meuble.jpg")} alt="photo" />
              </a>
              <h4 class="font-medium text-xl text-stone-800 ">Title product</h4>
              <h2 class="font-medium text-6xl text-stone-800 pt-32 ">22.€</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
