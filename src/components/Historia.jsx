import React from 'react';
import fondoHistoria from '../assets/fondo-historia.jpg';
import { styles } from '../styles';

const historiaStyle = {
    position: 'relative',
    backgroundImage: `url(${fondoHistoria})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    padding: '20px',
};


const Historia = () => {
    return (
        <section id="historia" className="text-light d-flex justify-content-center align-items-center text-center py-5" style={historiaStyle}>
            <div style={styles.fondoTransparente}></div>
            <div style={styles.contentStyle} className="col-12 col-md-8">
                <h2 className="mb-4">NUESTRA HISTORIA</h2>
                <p className='lead fw-bold'>
                    Somos un grupo de Estudiantes que se conoce hace mucho
                    tiempo, compartiendo un gusto en común que es el café. Un día 
                    decidimos emprender una cafetería que contenga sus mejores infusiones!
                    Nuestro primer local nació a principios de 2024. Eligiendo este nombre
                    porque es un nombre el cual elegimos como grupo para diferentes trabajos 
                    en la universidad, manteniéndolo desde las primeras cursadas juntos en 2022. 
                </p>
                
            </div>
        </section>
    );
};

export default Historia;
