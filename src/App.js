import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About';
import Appointment from './pages/Home/Appointment';
import ContactUs from './pages/Home/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Reviews from './pages/Home/Reviews';
import Navbar from './pages/Shard/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
