import '@fortawesome/fontawesome-free/css/all.min.css'
import '../index.css'
import { styles } from '../styles';
import fondoUbicacion from '../assets/ubicacion.png'

const Contact = () => {

    const ubicacionStyle = {
        position: 'relative',
        backgroundImage: `url(${fondoUbicacion})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '15px',
        borderRadius: '8px',
        textAlign: 'center',
        padding: '20px',
      };

    return (
        <section id="contacto" style={ubicacionStyle}>
            <div className="contact-section text-light fw-bold container" style={styles.contentStyle}> 
                <div className="row" >
                    <div className="col-md-6 contact-details">
                    <p>CONTACTO</p>
                    <ul className="list-unstyled">
                        <li> Número: +123 456 7890</li>
                        <li> Email: contacto@cafelosmagios.com</li>
                        <li> Dirección: Origone 151, Hurlingham</li>
                    </ul>
                    <p> HORARIO DE ATENCIÓN: </p>
                    <ul className="list-unstyled">
                        <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
                        <li>Sábados: 10:00 AM - 4:00 PM</li>
                    </ul>
                    <p>REDES SOCIALES:</p>
                    <div className="social-icons">
                    <a href="https://facebook.com/cafelosmagios" target="_blank" rel="" className="social-icon">
                        <i className="fab fa-facebook-f fa-2x" style={{color: '#3b5998'}}></i>
                    </a>
                    <a href="https://twitter.com/cafelosmagios" target="_blank" rel="" className="social-icon">
                        <i className="fab fa-twitter fa-2x" style={{color: '#55acee'}}></i>
                    </a>
                    <a href="https://instagram.com/cafelosmagios" target="_blank" rel="" className="social-icon">
                        <i className="fab fa-instagram fa-2x" style={{color: '#ac2bac'}}></i>
                    </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1641.728474121406!2d-58.6410121!3d-34.6178912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1721589132373!5m2!1ses!2sar"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    title="Ubicación"
                    ></iframe>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Contact;
