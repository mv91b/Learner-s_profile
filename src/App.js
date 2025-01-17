
import './App.css';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

function App() {
  return (
    <>
  <Navbar title ="textUtils" AboutUS ="About textUtils"/>
  <div className="container">
  <TextForm heading = "Enter your text here - " setText/>
  </div>
    </>
  );
}

export default App;
 