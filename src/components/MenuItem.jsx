import React from "react";
import { styles } from '../styles';

  const MenuItem = ({nombre, descripcion, precio, imagen, addItem, cantidad}) => {

    const backgroundImg = {
      backgroundImage: `url(${imagen})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const incrementarCantidad = () => {
      addItem(nombre, precio, 1);
    };
  
    const disminuirCantidad = () => {
      if (cantidad > 0) 
        addItem(nombre, precio, -1);
    };

    return (
      <div className="col-md-4 mb-4">
        <div className={`card h-100 text-cente}`} style={backgroundImg}>
          <div style={styles.fondoTransparente}></div>
          <div className="card-body text-light " style={styles.contentStyle}>
            <h5 className="card-title fw-bold" >{nombre}</h5>
            <p className="card-text fw-bold">{descripcion}</p>
            <p className="card-text fw-bold">${precio}</p>   
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary bg-brown border-brown mx-2" onClick={disminuirCantidad}>-</button>
              <span className="align-self-center">{cantidad}</span>
            <button className="btn btn-primary bg-brown border-brown mx-2" onClick={incrementarCantidad}>+</button>
          </div>
          </div>
        </div>
      </div>
    );
  };

export default MenuItem;
