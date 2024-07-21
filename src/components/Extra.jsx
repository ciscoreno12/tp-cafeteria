import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cafePreparacion from '../assets/cafePreparacion.jpg';
import cafePlantacion from '../assets/cafePlantacion.jpg';
import fondoExtra from '../assets/fondo-extra.jpg';
import '../index.css';
import { styles } from '../styles';

const backgroundStyle = {
    ...styles.backgroundStyle,
    backgroundImage: `url(${fondoExtra})`,
  };


const imageContainerStyle = {
    position: 'relative',
    marginBottom: '20px',
    height: '300px',
    borderRadius: '8px',
    overflow: 'hidden', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    borderRadius: '8px',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
};

const tituloImageStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '0',
    width: '100%',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '0 0 8px 8px',
    zIndex: 2,
};

const Extra = () => {
    return (
        <section id="extra" style={backgroundStyle}>
            <div className="container">
                <h2 className="display-4 mb-4 bg-light-brown text-dark p-2 rounded fw-bold" style={styles.tituloStyle}>EXTRA</h2>
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.youtube.com/watch?v=plantation_video" target="_blank" rel="noopener noreferrer" style={styles.linkStyle}>
                            <div style={imageContainerStyle}>
                                <img src={cafePlantacion} alt="Creación del Café" className="zoom-image" style={imageStyle} />
                                <div style={tituloImageStyle}>PRODUCCIÓN DE CAFÉ</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="https://youtu.be/6QgJk1qFIps?si=KUV70EU6H5aTJRQF" target="_blank" rel="noopener noreferrer" style={styles.linkStyle}>
                            <div style={imageContainerStyle}>
                                <img src={cafePreparacion} alt="Preparación del Café" className="zoom-image" style={imageStyle} />
                                <div style={tituloImageStyle}>PREPARACIÓN DE CAFÉ</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra;
