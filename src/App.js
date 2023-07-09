
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/menu' element={<Menu/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
