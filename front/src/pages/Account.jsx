import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ContactDetails from "../components/ContactDetails";
import MyPublications from "../components/MyPublications";
import ChangePassword from "../components/ChangePassword";
import Modifyinfos from "../components/ModifyInfos";
import ModifyAddress from "../components/ModifyAddress";


const Account = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAdress] = useState('');
    const [slideName, setSlideName] = useState('');
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
            content: <ContactDetails 
            name={name} 
            lastName={lastName} 
            address={address} 
            email={email} 
            modifyInfos={()=>{setSlideName('modifyInfos')}}
            modifyAddress={()=>{setSlideName('modifyAddress')}}
            />
        },
        {
            title:'publications',
            content: <MyPublications/>
        },
        {
            title:'password',
            content: <ChangePassword/>
        },
        {
            title:'modifyInfos',
            content: <Modifyinfos infosModified={()=>setSlideName('details')}/>
        },
        {
            title:'modifyAddress',
            content: <ModifyAddress infosModified={()=>setSlideName('details')}/>
        }
    ];

    useEffect(()=>{
        
        if (slideName === ''){
            setSlideName('details')
        } else {
            slides.map((slide)=>{
                if (slide.title === slideName){
                    setActiveSlide(slide.content);
                }
            })
        }
    }, [name, slideName]);
    
    
    return (
        <>
        
        <div className="h-screen bg-beige">
        <Header cart={[]} setCart={()=>{}} removeFromCart={()=>{}}/>
        <div className="px-4 py-4">
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
        </div>
        </>
    )
}

export default Account;