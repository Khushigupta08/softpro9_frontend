import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Academy from './components/Academy';
import Contact from './components/Contact';
import Service from './components/Service';
import Carrer from './components/Carrer';
import Course from './components/Course';
import Courselist from './components/Courselist';
import Industries from './components/Industries';
import Footer from './components/Footer';
import Web from './components/web';
import Sapservice from './components/Sapservice';
import Digitalmarketing from './components/Digitalmarketing';
import Blog from './components/Blog';
import Recruitment from './components/Recruitment';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


import './App.css';


function App() {
  return (
    <>
    <Router>
     <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/academy" element={<Academy/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/carrer" element={<Carrer/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/courselist" element={<Courselist/>} />
          <Route path="/industry" element={<Industries/>} />
          <Route path="/web" element={<Web/>} />
          <Route path="/sap" element={<Sapservice/>} />
          <Route path="/digital" element={<Digitalmarketing/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/recruitment" element={<Recruitment/>} />




          
        </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
