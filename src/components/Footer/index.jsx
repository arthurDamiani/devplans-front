import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import logoW from '../../assets/logo-branco.png'

import './style.css';

function Footer() {
    return(
        <footer id="rodape">
            <div className="lado-direitro-rodape">
                <div className="logo-rodape">
                    <a href="#cabecalho"><img className="logo-rodape" src={logoW} alt="DevPlans"/></a>
                </div>
                <div className="endereco">
                    <p className="endereco-email">contato@devplans.com.br</p>
                    <div className="endereco-fisico">
                        <div className="endereco-fisico-comeco">
                            <p>Rodovia Aparício Ramos Cordeiro,</p>
                            <p>180</p>
                        </div>
                        <p>Casa 18 - CEP 88065-500</p>
                    </div>
                </div>
            </div>
            <div className="lado-esquerdo-rodape">
                <div>
                    <ul className="lista">
                        <li className="lista-item"><a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                        <li className="lista-item item-meio"><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li className="lista-item"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    </ul>
                </div>
                <p>&copy; 2020 Devplans.</p>
            </div>
	    </footer>
    )
}

export default Footer;