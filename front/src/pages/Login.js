import { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/login", {
                email: email,
                password: password
            })
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
    <form className="flex flex-col items-center">
        <input type="email" 
            placeholder="email" 
            className="border-[1px] w-20" 
            value={email} 
            onChange={(event) => { setEmail(event.target.value) }}
        />
        <input type="password" 
            placeholder="password" 
            className="border-[1px] w-20"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
        />
        <button onClick={handleSubmit}>Send</button>
    </form>
    </>)
}

export default Login;