import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const bgcolor = {
    height: "100vh",
    backgroundColor: "#27241D"
  }

  return (
    <div style={bgcolor}>

      <Router>
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/users/add" element={<AddUser />} />
            <Route exact path="/users/edit/:id" element={<EditUser />} />
            <Route exact path="/users/:id" element={<User />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
