import React, { useEffect, useState } from 'react';
import GaleriaDeImagenes from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const tituloStyle = {
  marginBottom: '20px', 
  padding: '10px', 
  fontSize: '2rem', 
  lineHeight: '1.2'
};

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => {
        const imagen = data.map(item => ({
          original: item.image,
          thumbnail: item.image,
          description: item.title
        }));
        setImages(imagen);
      });
  }, []);

  return (
    <section id="galeria" className="py-5" style={{ backgroundColor: '#f5f5dc', color: '#8b4513' }}>
      <div className="container text-center">
        <h2 className='display-4 mb-4 bg-light-brown text-dark p-2 rounded fw-bold' style={tituloStyle}>GALERÍA DE IMÁGENES</h2><GaleriaDeImagenes items={images} />
      </div>
    </section>
  );
};

export default Gallery;
