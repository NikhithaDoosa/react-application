import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Shop from './components/Shop';
import Contact from "./components/Contact";
import Productlist from './components/productlist';
import Hello from "./components/Hello";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/shop' element={<Shop />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
              <Route exact path='/:id' element={<Productlist />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
