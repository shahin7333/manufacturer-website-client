
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login';


import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Reviews from './Pages/Reviews';
import About from './Pages/About';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/reviews' element={<Reviews/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/purchase' element={<Purchase/>} />
  </Routes>
  
  
  <Footer/>
    </div>
  );
}

export default App;
