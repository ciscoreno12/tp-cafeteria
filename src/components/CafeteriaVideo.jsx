import React from 'react'
import fondoVideo from '../assets/fondo-video.jpg'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { styles } from '../styles';

const sectionStyle = {
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px',
    backgroundImage: `url(${fondoVideo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff'
};

const videoContainerStyle = {
    margin: '0 auto',
    width: '100%',
    maxWidth: '800px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
};

const iframeStyle = {
    width: '100%',
    height: '450px', 
    border: 'none'
};



const CafeteriaVideo = () =>{
    return(
        <section id="conocenos" style={sectionStyle}>
            <h2 className="display-4 mb-4 bg-light-brown text-dark p-2 rounded fw-bold" style={styles.tituloStyle}>¡CONÓCENOS!</h2>
            <div style={videoContainerStyle}>
                <iframe
                    style={iframeStyle}
                    src="https://www.youtube.com/embed/x12LB53XW9Q"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}

export default CafeteriaVideo;
