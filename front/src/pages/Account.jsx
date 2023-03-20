import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ContactDetails from "../components/ContactDetails";
import MyPublications from "../components/MyPublications";
import ChangePassword from "../components/ChangePassword";


const Account = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAdress] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [slideName, setSlideName] = useState('details');
    const [activeSlide, setActiveSlide] = useState('');


    
    const getInfos = async () => {
        const userId = localStorage.getItem("id");
        const userInfos = await axios.get("http://localhost:8080/userinfos/" + userId, {
                headers: {
                  'Authorization': `${localStorage.getItem("auth")}`
                },
        });
        setName(userInfos.data.name);
        setLastName(userInfos.data.lastName)
        setEmail(userInfos.data.email);
        setNickName(userInfos.data.nickName);
        setAdress(userInfos.data.address);
    }
    
    getInfos()
    

    const navigate = useNavigate();
    const handleSingOut = () => {
        localStorage.clear()
        console.log('signed out')
        console.log(localStorage.getItem('id'))
        navigate("/");
    }

    const slides = [
        {
            title:'details',
            content: <ContactDetails name={name} lastName={lastName} address={address} email={email}/>
        },
        {
            title:'publications',
            content: <MyPublications/>
        },
        {
            title:'password',
            content: <ChangePassword/>
        }
    ];

    useEffect(()=>{
        slides.map((slide)=>{
            if (slide.title === slideName){
                setActiveSlide(slide.content);
            }
        })
    }, [slideName])
    



    // const tableau d'objet chacun contient un titre qui est sa clé et un content qui est un composant ensuite on l'affiche en appelant le tableau avec sa clé et son point content. On toggle ça avec le setSlide qui prendra la valeur du titre (la clé)
    
    return (
        <>
        <Header cart={[]} setCart={()=>{}} removeFromCart={()=>{}}/>
        
        <div className="bg-beige px-4 py-4 h-screen">
            <div className="flex space-x-4 px-4">
            <div className="flex flex-col w-64 items-start space-y-2 bg-white py-4 px-4">
                <h1 className="font-bold text-2xl">VINMA and me</h1>
                <p>Welcome, {name}</p>
                <img className="rounded border-gray-100 shadow-sm" src="https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_1280.png" alt="[Avatar]"></img>
                <button className="hover:text-cyan-400" onClick={()=>{setSlideName('details')}}>my contact details</button>
                <button className="hover:text-cyan-400" onClick={()=>{setSlideName('password')}}>change password</button>
                <button className="hover:text-cyan-400">my favorite items</button>
                <button className="hover:text-cyan-400" onClick={()=>{setSlideName('publications')}}>my publications</button>
                <button className="hover:text-cyan-400" onClick={handleSingOut}>sign out</button>
            </div>
            
            <div className="space-y-4 w-full">
                <div>{activeSlide}</div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Account;