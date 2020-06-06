import React, { useState, useEffect } from 'react';
import './App.css';

import ClassExample from "./ClassExaple";

function App() {

  const [buttonDisplay, setButtonDisplay] = useState(true);
  const [buttonClass, setButtonClass] = useState("");
//kazda zmiana stanu wywuluje efekt useEffect

  useEffect(()=>{
    console.log("jestem w hooku effect");
    setButtonClass("bg-green")
  }, [buttonClass])

  return (
    <div className="App">
      {/* <ClassExample /> */}

      {buttonDisplay ? <ClassExample /> : null}

      <button onClick={()=> setButtonDisplay(false)}>Usun drugi button</button>

      <button className={buttonClass} onClick={()=> setButtonClass("bg-blue")}>Zmiana tła</button>
    </div>
  );
}

export default App;
