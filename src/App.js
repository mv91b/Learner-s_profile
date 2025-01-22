import React, { useState } from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';

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
    } else if (newMode === 'yellow') {
      setMode('yellow');
      document.body.style.backgroundColor = '#f9f871';
      showAlert('Yellow mode has been enabled', 'success');
    } else if (newMode === 'pink') {
      setMode('pink');
      document.body.style.backgroundColor = '#ffc0cb';
      showAlert('Pink mode has been enabled', 'success');
    } else if (newMode === 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#a8e6cf';
      showAlert('Green mode has been enabled', 'success');
    } else if (newMode === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#add8e6';
      showAlert('Blue mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
