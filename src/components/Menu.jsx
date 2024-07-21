import React, { useState } from 'react';
import MenuItem from './MenuItem';
import '../index.css'
import fondo from '../assets/fondo-menuitem.jpg'
import cafeAmericano from '../assets/cafe-americano.jpg';
import capuchino from '../assets/capuchino.jpg'
import latteMachiatto from '../assets/latteMacchiato.jpg'
import lungo from '../assets/lungo.jpg'
import caramelo from '../assets/caramelo.jpg'
import espresso from '../assets/cafe-espresso.jpg'
import { styles } from '../styles';

const Menu = () => {
  const [itemsSeleccionados, setItemsSeleccionados] = useState({});
  const [precioTotal, setPrecioTotal] = useState(0);

  const backgroundStyle = {
    ...styles.backgroundStyle,
    backgroundImage: `url(${fondo})`,
  };

  const menuItems = [ 
    { nombre: 'CAFÉ AMERICANO', 
      descripcion: 'Café negro, contiene 50% agua y 50% espresso', 
      precio: 10, 
      imagen: cafeAmericano
    },
    { nombre: 'CAPUCHINO', 
      descripcion: 'Café con leche y espuma, leche y espuma de leche a partes iguales', 
      precio: 13, 
      imagen: 
      capuchino 
    },
    { nombre: 'LATTE MACHIATTO',
      descripcion: 'Contiene mayor cantidad de leche y cafe espresso', 
      precio: 16, 
      imagen: latteMachiatto 
    },
    { nombre: 'LUNGO', 
      descripcion: 'Preparado igual que un espresso pero con el doble de agua', 
      precio: 18, 
      imagen: lungo 
    },
    { nombre: 'CARAMELO', 
      descripcion: 'Café con un toque de vainilla, endulzado con un chorro de caramelo', 
      precio: 15, 
      imagen: caramelo 
    },
    { nombre: 'ESPRESSO', 
      descripcion: 'Café y agua caliente', 
      precio: 10, 
      imagen: espresso 
    },
  ];

  const addItem = (nombre, precio, cantidad) => {
    setItemsSeleccionados(prevItems => {
      const newItems = { ...prevItems };
      if (newItems[nombre]) {
        newItems[nombre].cantidad += cantidad;
      } else 
        newItems[nombre] = { precio, cantidad };

      if (newItems[nombre].cantidad <= 0) 
        delete newItems[nombre];
      return newItems;
    });
  };

  const calcularPrecioTotal = () => {
    let total = 0;
    Object.values(itemsSeleccionados).forEach(item => {
      total += item.precio * item.cantidad;
    });
    setPrecioTotal(total);
  };

  return (
    <section id="menu" className="py-5" style={{ backgroundColor: '#f5f5dc' }}>
      <div className="container text-center" style={backgroundStyle}>
        <div className="menu-header mx-auto" style={styles.styleMenuHeader}>
          <h2>NUESTROS CAFÉ MAGIOS</h2>
        </div>
        <div className="row fw-bold">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              nombre={item.nombre}
              descripcion={item.descripcion}
              precio={item.precio}
              imagen={item.imagen}
              addItem={addItem}
              cantidad={itemsSeleccionados[item.nombre] ? itemsSeleccionados[item.nombre].cantidad : 0}
            />
          ))}
        </div>
        <button className="btn btn-brown mt-3 text-white fw-bold" onClick={calcularPrecioTotal}>
          CALCULAR TOTAL
        </button>
        <p className="total-precio mt-3 fw-bold fs-4 text-dark">TOTAL: ${precioTotal}</p>
      </div>
    </section>
  );
};
export default Menu;