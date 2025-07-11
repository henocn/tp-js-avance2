import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Mail } from 'lucide-react';
import './styles/pageContainer.css';

const PageContainer = ({ children }) => {
  return (
    <div className="page-container">
      <nav className="navbar">
        <Link to="/" className="nav-link"><Home size={20} style={{marginRight:8}}/>Home</Link>
        <Link to="/about" className="nav-link"><User size={20} style={{marginRight:8}}/>About</Link>
        <Link to="/contact" className="nav-link"><Mail size={20} style={{marginRight:8}}/>Contact</Link>
      </nav>
      {children}
    </div>
  );
};

export default PageContainer;
