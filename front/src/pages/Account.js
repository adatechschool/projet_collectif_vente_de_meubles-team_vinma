// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

//Récupérer avec GET pour afficher : 

const Account = () => {
    return (
        <>
        <aside class="rounded flex flex-col w-64 fixed inset-y-0 left-0 items-start space-y-2 ">
            <h1 class="font-black text-2xl">VINMA and me</h1>
            <p>Welcome [Nickname]</p>
            <img class="rounded border-gray-100 shadow-sm" src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png" alt="[Avatar]"></img>
            <button class="hover:text-blue-400">My contact details</button>
            <button class="hover:text-blue-400">Change password</button>
            <button class="hover:text-blue-400">My orders</button>
            <button class="hover:text-blue-400">My publications</button>
            <button class="hover:text-blue-400">Signout</button>
        </aside>
        
        <div class="pl-72 space-y-4 ">
            <div class="space-x-4 space-y-2 rounded border-gray-100 shadow-sm">
                <button class="text-lime-400 font-extrabold text-xl rounded py-3 px-6 hover:scale-125 transition-all duration-200">My last order</button>
                <p>You have not placed an order with this account yet.</p>
                <button class="text-lime-400 font-semibold rounded hover:bg-lime-400 hover:text-white focus:ring focus:ring-lime-300 transition-all duration-500 py-3 px-6">Start my shopping</button> 
            </div>

            <div class="space-x-4 space-y-4 rounded border-gray-100 shadow-sm">
                <button class="text-rose-700 font-extrabold text-xl rounded py-3 px-6 hover:scale-125 transition-all duration-200">My contact details</button>
                    <div class="space-x-4 space-y-2">
                        <h3 class="font-bold">My infos</h3>
                        <p>[Nickname]</p>
                        <p>[Email]</p>
                        <p>[Phone]</p>
                        <button class="text-rose-700 font-semibold rounded hover:bg-rose-700 hover:text-white focus:ring focus:ring-rose-600 transition-all duration-500 py-3 px-6">Change your contact details</button>
                    </div>
                    <div class="space-x-4 space-y-2">
                        <h3 class="font-bold">Billing data</h3>
                        <p>[Name] [LastName]</p>
                        <p>[Adress]</p>
                        <button class="text-rose-700 font-semibold rounded hover:bg-rose-700 hover:text-white focus:ring focus:ring-rose-600 transition-all duration-500 py-3 px-6">Change your billing data</button>
                    </div>          
            </div>
        </div>
        </>
    )
}

export default Account;