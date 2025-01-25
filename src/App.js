import React, { useState } from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';
import About from './componants/About';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Default mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null); // Clear alert after 3 seconds
    }, 2000);
  };

  const toggleMode = (newMode) => {
    if (newMode === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        {/* <Navbar title="textUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /> */}
        <Alert alert={alert} />

        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={() => 
          <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />
         } />
         </Switch>
       </Router>
    </>
  );
}

export default App;
