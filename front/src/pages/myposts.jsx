// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const MyPosts = () => {
    return (
    <section className="flex flex-col text-center bg-gray-200 h-screen w-screen">
        <div>
            <h1 className="font-bold text-6xl text-stone-800 m-4 pt-4">My posts</h1>
        </div>

        <div className="flex flex-col flex-wrap w-full h-full">
            <div className="bg-white h-full">
                <div className="flex w-3/5 justify-evenly">
                    <img className=""
                        src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                        alt="img"/>
                        <div className="flex flex-col justify-around">
                            <h1 className="font-medium text-3xl">meuble TV</h1>
                            <h2 className="font-medium text-3xl">20 €</h2>
                            <h3 className="font-medium text-2xl">meuble</h3>
                            <div>
                                <button
                                    type="submit"
                                    className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm mr-100"
                                >
                                    Modifier
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-14 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm mr-100"
                                >
                                    Supprimer
                                </button>

                            </div>
                        </div>
                </div>
            </div>

            {/* <div className="">
                <img className=""
                    src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                    alt="img"/>
                    <div className="flex justify-between mb-10">
                        <h1 className="font-medium text-2xl text-stone-800">meuble TV</h1>
                        <h2 className="font-medium text-2xl">20 €</h2>
                    </div>
            </div>

            <div className="">
                <img className=""
                    src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                    alt="img"/>
                    <div className="flex justify-between mb-10">
                        <h1 className="font-medium text-2xl text-stone-800">meuble TV</h1>
                        <h2 className="font-medium text-2xl">20 €</h2>
                    </div>
            </div>

            <div className="">
                <img className=""
                    src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                    alt="img"/>
                    <div className="flex justify-between mb-10">
                        <h1 className="font-medium text-2xl text-stone-800">meuble TV</h1>
                        <h2 className="font-medium text-2xl">20 €</h2>
                    </div>
            </div>

            <div className="">
                <img className=""
                    src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                    alt="img"/>
                    <div className="flex justify-between mb-10">
                        <h1 className="font-medium text-2xl text-stone-800">meuble TV</h1>
                        <h2 className="font-medium text-2xl">20 €</h2>
                    </div>
            </div>

            <div className="">
                <img className=""
                    src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                    alt="img"/>
                    <div className="flex justify-between">
                        <h1 className="font-medium text-2xl text-stone-800">meuble TV</h1>
                        <h2 className="font-medium text-2xl">20 €</h2>
                    </div>
            </div>

            <div className="">
                <img className=""
                    src="https://bestmobilier.com/21812-home_default/come-meuble-tv-bois-200-cm-style-contemporain.jpg"
                    alt="img"/>
                    <div className="flex justify-between">
                        <h1 className="font-medium text-2xl text-stone-800">meuble TV</h1>
                        <h2 className="font-medium text-2xl">20 €</h2>
                    </div>
            </div> */}

        </div>
    </section>)
}

export default MyPosts