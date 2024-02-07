import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Register({ setIsRegistered }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const data = {
      name,
      email,
      password,
    };
    axios
      .post("https://extinct-nightgown-ant.cyclic.app/users/register", data)
      .then((res) => {
        console.log(res);
        if (res.data.isOK) {
          alert(res.data.msg);
          setIsRegistered(true);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  return (
    <Container>
      <h2>Register</h2>
      <input
        type="text"
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleRegister}>Submit</button>
      <p onClick={() => setIsRegistered(true)}>Allready a User? Login</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  border: solid lightgray 1px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h2 {
    margin: 5px 0px;
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }

  input {
    width: 80%;
    height: 35px;
    padding-left: 10px;
    font-size: medium;
    border-radius: 5px;
    border: solid lightgray 1px;
    outline: none;
    margin: 10px 0px;
  }

  button {
    width: 210px;
    height: 30px;
    font-size: medium;
    background-color: white;
    border-radius: 5px;
    border: solid lightgray 1px;
    background-color: black;
    color: white;
  }
`;
