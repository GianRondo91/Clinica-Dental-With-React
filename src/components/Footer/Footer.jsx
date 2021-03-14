import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    // constructor (props){
    //     super(props)
    //  };

    render() {
        return (
            <div id="footer" className="cell-4">
                <div className="footer-box">
                    <p>Biblioteca de Salud</p>
                    <p>Cómo contratar</p>
                    <p>Cuadro Médico</p>
                </div>
                <div className="footer-box">
                    <p>Sobre nosotros</p>
                    <p>Preguntas frecuentes</p>
                    <p>Trabaja con nosotros</p>
                </div>
                <div className="footer-box">
                    <p> RRHH y bolsa de trabajo Icono footer</p>
                    <p>Portal mediadores Icono footer</p>
                    <p>Portal profesionales Icono footer</p>
                </div>
                <div className="footer-box">
                    <p><FontAwesomeIcon icon={faPhoneAlt}/> 655369875</p>
                    <p><FontAwesomeIcon icon={faHome}/> Av. cataluña 123</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> tidenplus@gmail.com</p>
                </div>
            </div>
        )
    }
};

export default Footer;