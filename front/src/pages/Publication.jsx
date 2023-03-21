import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Publication = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");

    const navigate = useNavigate();

    //upload images
    const handleImage= (e) =>{
        console.log(e.target.files)
        setPicture(e.target.files[0])
    }

    const handleSubmit= async (event) => {
        try {
            const response = await axios.post ("https://localhost:8080/publication", {
                title: title,
                category: category,
                description: description,
                price: price,
                picture: picture
            });
            console.log(response.data);
            navigate("/");
        } catch (error) {
        console.log(error);
    };
}
    

    return (
        <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md-w-full mx-auto">
                <div className="text-center font-medium text-xl"> Sell your items here</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6">           
                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block">Title</label>
                    <input
                    type="text"
                    placeholder="Ex: Black chair"
                    className= "w-full p-2 border border-gray-300 rounded mt-1"
                    value={title}
                    onChange= {(event) => {
                        setTitle(event.target.value)
                    } 
                }
                required
                />
                </div>
                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block"> Category </label>
                    <select 
                    name="" 
                    id="" 
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    value={category}
                    onChange= {(event) => {
                    setCategory(event.target.value)
                    }
                }
                    >
                        <option value="Bed">Lit</option>
                        <option value="Sofa">Canapé</option>
                        <option value="Cabinet">Armoire</option>
                        <option value="Chair">Chaise</option>
                        <option value="Table">Table</option>
                        <option value="Others">Autre</option>
                    </select>

                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block"> Description </label>
                    <input
                    type="text"
                    placeholder="Ex: In a very good condition."
                    className= "w-full p-2 border border-gray-300 rounded mt-1"
                    value={description}
                    onChange= {(event) => {
                        setDescription(event.target.value)
                    } 
                }
                required
                />
                </div>
                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block"> Price </label>
                    <input
                    type="text"
                    placeholder="00,0€"
                    className= "w-full p-2 border border-gray-300 rounded mt-1"
                    value={price}
                    onChange= {(event) => {
                        setPrice(event.target.value)
                    } 
                }
                 required
                />
                </div>
                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block"> Picture </label>
                    <input
                    type="file"
                    placeholder="Add pictures"
                    // className= "w-full p-2 border border-gray-300 rounded mt-1"
                    className=" w-full p-2 bg-gray-300 border-dashed border-4 h-full "
                    onChange= {handleImage}
                    />
                </div>
                <div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-amber-400 hover:bg-yellow-600 rounded-md text-white text-sm"
                    onClick = {handleSubmit}
                >
                    Post
                </button>
                </div>
            </form>

            </div>
        </div>
        
        </>
    )
}

export default Publication;