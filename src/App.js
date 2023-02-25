// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light') //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
    const togglemode=()=>{
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='#02012d'
      showAlert('Dark Mode has been enabled',"success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light Mode has been enabled',"success")
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Router>
      <Navbar title="TextUtils" Home="Home" Link="Link" AboutUs="About TextUtils" Search="Search" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      {/* <Navbar /> */}
        <div className="container my-3">
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse " mode={mode}/>}/>
          </Routes>
            {/* <TextForm showAlert={showAlert} heading="Enter text to analyse " mode={mode}/> */}
          {/* <About/> */}
            </div> 
      </Router>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;
/* <div classNameName="App">
<header classNameName="App-header">
  <img src={logo} classNameName="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    classNameName="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React with Kshitij Gupta
  </a>
</header>
</div> */