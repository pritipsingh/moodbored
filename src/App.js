import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Discovery from './Pages/Discovery/Discovery';
import { useEffect } from 'react';



function App() {




  return (
    <>
      <Navbar />
<div className='w-full min-h-full'>
      <Routes >
        
        <Route path='/' element={<Home />} />
       
      </Routes>
 </div>
x


    </>
  );
}

export default App;
