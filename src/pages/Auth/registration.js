import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../../App.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [RoleReg, setRoleReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      role: RoleReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response.data);
        // navigate("/");
      } else {
        setLoginStatus(response.data[0].username);
        console.log(setLoginStatus);
        // navigate("/");
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        console.log(response.data.user[0].username);
        // navigate("/");
      }
    });
  }, []);

  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="information">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Role</label>
        <input
          type="text"
          onChange={(e) => {
            setRoleReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="information">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
        {/* onPress={() => navigation.navigate('Details')} */}
      </div>

      <h1> Welcome {loginStatus}</h1>
    </div>
  );
}

export default Registration;

{
  /* <>
  <Form.Group className="mb-3">
    <Form.Label>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input" disabled />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group>
</> */
}
