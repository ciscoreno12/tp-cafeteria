import React from 'react';
import { styles } from '../styles';
import Menu from './Menu';
import Gallery from './Gallery';
import Contact from './Contact';
import Extra from './Extra';
import Historia from './Historia';
import CafeteriaVideo from './CafeteriaVideo'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContent = () => {

  const sectionStyle = {
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#d2b48a'
  };

  
 
  return (
    <main className="container my-5">
      <section>
        <Historia />
      </section>

      <section style={styles.sectionStyle}>
        <Menu />
      </section>

      <section style={styles.sectionStyle}>
        <Gallery />
      </section>

      <section style={styles.sectionStyle}>
        <Extra />
      </section>

      <section style={styles.sectionStyle}>
        <CafeteriaVideo />
      </section>

      <section style={styles.sectionStyle}>
        <Contact />
      </section>
    </main>
  );
};

export default MainContent;
