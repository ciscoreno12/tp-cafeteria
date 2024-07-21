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
