// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setmode] = useState("light");
  const [alert,setalert] = useState(null);

const showalert=(message,type)=>{
setalert({  
  msg: message,
  type: type
})
setTimeout(()=>{
  setalert(null);
}, 1500);
}

const removeBodyClasses=()=>{
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-dark");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-success");
}

const togglemode=(cls)=>{
  removeBodyClasses();
  console.log(cls);
  document.body.classList.add("bg-"+cls);
  if(mode==="light")
  {
    setmode("dark");
    document.body.style.backgroundColor="#042743";
    showalert("darkmode has been enabled","success");
    document.title="Textutils - Dark mode";
  }
  else
  {
    setmode("light");
    document.body.style.backgroundColor="white";
    showalert("Lightmode has been enabled","success");
    document.title="Textutils - Light mode";
  }
}
  return (
   <>
     <BrowserRouter>
    
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className="container my-3">
<Routes>
          <Route path="/" element={<About mode={mode} />} />

          <Route path="/about" element={<About mode={mode} />} />
          
          <Route path="/home"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode} showAlert={showalert}/>} /> 
</Routes>
          </div>
    
    </BrowserRouter>

   </>
  );
}

export default App;
