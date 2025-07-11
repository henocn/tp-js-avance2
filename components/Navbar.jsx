import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Mail, User2Icon } from 'lucide-react';
import '../App.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link"><Home size={20} style={{marginRight:8}}/>Home</Link>
    <Link to="/about" className="nav-link"><User size={20} style={{marginRight:8}}/>About</Link>
    <Link to="/contact" className="nav-link"><Mail size={20} style={{marginRight:8}}/>Contact</Link>
    <Link to="/students" className="nav-link"><User2Icon size={20} style={{marginRight:8}}/>Students</Link>
  </nav>
);

export default Navbar;
