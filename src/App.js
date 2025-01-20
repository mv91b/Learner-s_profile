
import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

function App() {
  return (
    <>
  <Navbar title ="textUtils" AboutUS ="About textUtils"/>
  <div className="container">
    <TextForm heading ="Enter the text below to enalize "/>
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;
 