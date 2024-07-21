import React from 'react';

const footerStyle = {
  backgroundColor: '#d2b48a', // Marrón clarito
};

const Footer = () => {
  return (
      <footer style={footerStyle} className="text-center">
          <div className="container">
              <h5>Integrantes del Grupo</h5>
              <ul className="list-unstyled">
                  <li>Burella Barco, Mateo</li>
                  <li>Renó, Francisco</li>
                  <li>Casasola, Franco</li>
              </ul>
          </div>
      </footer>
  );
};

export default Footer;
