import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Reviews from './Pages/Home/Reviews/Reviews';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
