import Container from "./components/Container";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import { useRef, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.chucknorris.io/jokes/random",
};
function App() {
  const [Name, setName] = useState("");
  const [Color, setColor] = useState("");
  const [Joke, setJoke] = useState("");
  useEffect(() => {
    const getjoke = async () => {
      try {
        const response = await axios.request(options);
        const data = response.data.value;
        console.log(data);
        setJoke(data);
      } catch (err) {
        console.log(err);
      }
    };
    getjoke();
  }, []);

  const HandleChange = (changed) => {
    setName(changed.target.value);
    setColor(changed.target.value);
  };

  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="center">
      <h1>COLOR APP</h1>
      <Container name={Name} color={Color} />
      <Input inputValue={Name} change={HandleChange} focus={inputRef} />
      <h2>{Joke}</h2>
    </div>
  );
}

export default App;
