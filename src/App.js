import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //whether  dark mode enable or not
  const [alert, setAlert] = useState(null); //Alert is a Object here 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2b2b39 ';
      showAlert("Dark mode has been enable ", "success")
      document.title = 'YOYO-Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = ' white';
      showAlert("Light mode has been enable ", "success")
      document.title = 'YOYO-Light Mode';
    }
  }
  return (
    
    
    <Router>
      <Navbar title="YOYO" mode={mode} toggleMode={toggleMode}></Navbar>

      <Alert alert={alert} />

      <div className='container my-3'>
        {/* //react router dom  */}
    

        <Routes>
          <Route exact path="/about" element={<About/>}/> 
            {/* <About /> */}
         
    
          <Route  exact path="/" element={<TextForm heading='Enter The Text' mode={mode} showAlert={showAlert} />}/>
            {/* <TextForm heading='Enter The Text' mode={mode} showAlert={showAlert} /> */}
           
          
        </Routes> 


      </div>
    </Router>
    
  );
}

export default App;
