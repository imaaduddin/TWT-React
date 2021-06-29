import './App.css';
import Info from "./Components/Info";
import AddItem from "./Components/AddItem";
import ButtonState from './Components/ButtonState';
// import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Imaad" number={13}/>
      <AddItem text="Naruto" number={7}/>
      <AddItem text="Shikimaru" number={10}/>
      <ButtonState/>
    </div>
  );
}

export default App;
