import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from './pages/LogIn';
import Register from './pages/Register';
import Home from './pages/Home';
import logo from './assets/images/ixigo.png'
import profile from './assets/images/profile.svg'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert('You have successfully logged out.');
  };

  return (
    <Router>
      <div className="flex items-center justify-between p-4 bg-white-500">

       
        <Link to="/" className="text-white text-2xl font-bold"><img className = 'h-10 w-20 mx-20'src={logo}></img></Link>
       
        <div className='flex items-center justify-between'>
           <img src={profile} ></img>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="text-white bg-red-500 px-4 py-2 rounded">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="text-white bg-orange-500 px-4 py-2 rounded">
              Log In
            </Link>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
