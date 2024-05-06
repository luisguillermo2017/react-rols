import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './Navbar'; // Asegúrate de que la importación es correcta

const user = {
  role: 'gerente', // 'administrador', 'gerente', 'usuario'
};

function NotAuthorized() {
  return <h1>No estás autorizado para ver esta página.</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/page1" replace />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />

        <Route element={<ProtectedRoute allowedRoles={['administrador', 'usuario']} userRole={user.role} />}>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['administrador', 'gerente']} userRole={user.role} />}>
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
