
import React,{ useState } from 'react';
import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert]= useState(null);
  const showAlert = (message, type)=>{
      setAlert({msg: message, type: type})
      setTimeout(() => {
        setAlert(null); // Clear alert after 3 seconds
      }, 2000);
  }

const toggleMode= ()=> {
  if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark mode hase been Enabled", "success")
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode hase been Enabled", "success")
  }
}

  return (
    <>
  <Navbar title ="textUtils" mode ={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />

  <div className="container">
  <TextForm showAlert = {showAlert} heading ="Enter the text below to enalize " mode ={mode}/>
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;
 