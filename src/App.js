import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Discovery from './Pages/Discovery/Discovery';
function App() {
  return (
<>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/discovery" element={<Discovery/>}/>
   </Routes>

   </>
  );
}

export default App;
