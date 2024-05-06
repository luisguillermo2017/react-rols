import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
      <Link style={{ marginRight: '10px' }} to="/page1">Página 1</Link>
      <Link style={{ marginRight: '10px' }} to="/page2">Página 2</Link>
      <Link style={{ marginRight: '10px' }} to="/page3">Página 3</Link>
      <Link style={{ marginRight: '10px' }} to="/page4">Página 4</Link>
      <Link to="/page5">Página 5</Link>
    </nav>
  );
}

export default Navbar;
