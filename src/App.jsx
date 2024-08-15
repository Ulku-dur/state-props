import { useState } from "react";
import "./App.css";
import ChangeName from "./ChangeName";

function App() {
  const [username, setUsername] = useState("")
  const handleInput = (e) => {
    setUsername(e.target.value);
  }
  return <>
  <h1>State and Props</h1>
  <label htmlFor="username">Enter your name here: </label>
  <input id="username" type="text" placeholder="My name is" onChange={handleInput}/>
  <p>Hi there, {username}</p>
  <p>{username}, you are doing great today</p>
  <ChangeName username = {username} setUsername={setUsername}/>
  </>;
}

export default App;
