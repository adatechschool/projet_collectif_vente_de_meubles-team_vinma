import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [picture, setPicture] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (password === confirmPassword) {
        const response = await axios.post("http://localhost:8080/signup", {
          name: name,
          lastname: lastname,
          nickname: nickname,
          address: address,
          email: email,
          password: password,
        });
        console.log(response.data);
        navigate("/");
      } else {
        console.log(
          "Your password confirmation is different from your password"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="name"
          className="border-[1px] mt-5"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lastname"
          className="border-[1px] mt-5"
          value={lastname}
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="nickname"
          className="border-[1px] mt-5"
          value={nickname}
          onChange={(event) => {
            setNickname(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="address"
          className="border-[1px] mt-5"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          className="border-[1px] mt-5"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="border-[1px] mt-5"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="confirm password"
          className="border-[1px] mt-5"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <input type="file" className="mt-5" />
        <button
          type="submit"
          className="border-[1px] bg-green-500 mt-5 px-5 py-2"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
