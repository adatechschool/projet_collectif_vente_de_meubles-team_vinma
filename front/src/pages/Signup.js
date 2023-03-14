import {useState} from "react";


const Signup = () => {
const [name, setName] = useState('');


    return (
        <>
          <form className="flex flex-col items-center">
           < input type="text" placeholder="name" className="border-[1px] mt-5" value={name} onChange={(event)=>{
            setName(event.target.value)
           }}/>
            <input type="text" placeholder="lastname"className="border-[1px] mt-5"/>
            <input type="text" placeholder="nickname"className="border-[1px] mt-5"/>
            <input type="text" placeholder="address"className="border-[1px] mt-5"/>
            <input type="email" placeholder="email" className="border-[1px] mt-5"/>
            <input type="password" placeholder="password" className="border-[1px] mt-5"/>
            <input type="password" placeholder="confirm password" className="border-[1px] mt-5"/>
            <button type="submit" className="border-[1px] bg-green-500 mt-5 px-5 py-2">Sign Up</button>
          </form>
       </>
    );
};

export default Signup;