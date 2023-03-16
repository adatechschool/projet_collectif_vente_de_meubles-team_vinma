// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

//Récupérer avec GET pour afficher : 

const Account = () => {
    return (
        <>
        <h1 className="border-[1px] mt-5 font-bold">Hello [Nickname]</h1>
        <div className="border-[1px] mt-5 flex flex-col items-center">
            <h2 className="text-lime-900 font-bold">My details</h2>
            <p>[Name]</p>
            <p>[LastName]</p>
            <p>[Nickname]</p>
            <p>[Email]</p>
            <h2 className="text-rose-600 font-bold">My adress</h2>
            <p>[Adress]</p>
        </div>
        </>
    )

}

export default Account;

