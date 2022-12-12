import './App.css';
import About from './components/About';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Project from './components/Project';
import Home from './components/Home'
import Footer from './components/Footer';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Form />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
