import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-cafe-magios.png';
import fondoHeader from '../assets/fondo-header.jpg';
import { styles } from '../styles';

const Header = () => {
  const headerStyle = {
    ...styles.headerStyle,
    backgroundImage: `url(${fondoHeader})`,
  };

  const logoStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <header style={headerStyle}>
      <div style={styles.fondoTransparente}></div>
      <div style={styles.contentStyle} className="container">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center mb-2">
            <h1 className="text-center me-3">CAFÉ LOS MAGIOS</h1>
            <img src={logo} style={logoStyle} alt="Logo" className="img-fluid" />
          </div>
          <nav className="nav justify-content-center fw-bold">
            <a className="nav-link active text-light" aria-current="page" href="#historia">HISTORIA</a>
            <a className="nav-link text-light" href="#menu">MENÚ</a>
            <a className="nav-link text-light" href="#galeria">GALERÍA</a>
            <a className="nav-link text-light" href="#contacto">CONTACTO</a>
            <a className="nav-link text-light" href="#extra">EXTRA</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
