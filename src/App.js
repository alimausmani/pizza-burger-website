import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Login from './pages/Login';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import MyContext from './components/Navbar/Context';
// import MyProvider from './components/Navbar/Provider';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <MyContext/>
        <MyProvider/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
