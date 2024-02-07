import { useState } from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import { RiReactjsLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
import { BiLogoPlayStore } from "react-icons/bi";
import axios from "axios";
import Register from "./Register";

const skills = [
  {
    name: "React",
    logo: <RiReactjsLine />,
    border: "green",
  },
  {
    name: "Github",
    logo: <RiGithubLine />,
    border: "purple",
  },
  {
    name: "Apple",
    logo: <RiAppleLine />,
    border: "brown",
  },
  {
    name: "PlayStore",
    logo: <BiLogoPlayStore />,
    border: "blue",
  },
];

export default function Test() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skill, setSkill] = useState("____");
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLogin, setIslogin] = useState(false);

  const handleChangeSkill = (skillName) => {
    setSkill(skillName);
  };

  const handleSubmit = () => {
    const data = {
      name,
      email,
      password,
    };
    axios
      .post("https://extinct-nightgown-ant.cyclic.app/users/login", data)
      .then((res) => {
        if (res.data.isOK) {
          setIslogin(true);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <Heading>Test Assignment</Heading>
        <Submission>
          <span>Hello, My name is</span>
          <input
            type="text"
            name="name"
            className="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          ,<span>I specialize in </span>
          <span className="skillName">{skill}</span>
          <span> as following shown, and this is my test submission,</span>
        </Submission>
        <Skills>
          {skills.map((skill, i) => {
            return (
              <SkillCard
                name={skill.name}
                key={i}
                icon={skill.logo}
                handleChangeSkill={handleChangeSkill}
                border={skill.border}
              />
            );
          })}
        </Skills>
        {isLogin ? (
          <LoginSuccess>
            <h1>Login Successfully</h1>
            <button
              onClick={() => {
                setSkill("_____")
                setName("");
                setIslogin(false);
              }}
            >
              Logout
            </button>
          </LoginSuccess>
        ) : (
          <div className="main">
            {isRegistered ? (
              <SubmitBox>
                <h2>Login</h2>
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  value={name}
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
                <button onClick={handleSubmit}>Submit</button>
                <p onClick={() => setIsRegistered(false)}>New User? Register</p>
              </SubmitBox>
            ) : (
              <Register setIsRegistered={setIsRegistered} />
            )}
          </div>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    width: 90%;
    margin: auto;
  }
`;
const Heading = styled.p`
  font-size: 30px;
  margin: 20px 10px;
  letter-spacing: 2px;
`;
const Submission = styled.div`
  width: 80%;
  margin: 20px;
  border: solid lightgray 1px;
  padding: 20px;
  border-radius: 10px;
  text-align: start;
  font-weight: 500;
  word-spacing: 1px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .nameInput {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    width: 100px;
    margin: 0px 10px;
  }

  .skillName {
    /* border-bottom: 1px solid black; */
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SubmitBox = styled.div`
  width: 90%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

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

  p {
    text-decoration: underline;
    cursor: pointer;
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
  h2 {
    margin: 5px 0px;
  }
`;

const LoginSuccess = styled.div`
  width: 80%;
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 20px;
  color: #4fe14f;

  button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: black;
    color: white;
  }
`;
