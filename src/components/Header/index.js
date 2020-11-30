import React, { useState } from 'react';
import './Header.css'
import logoB from '../../assets/logo-azul.png'
import logoW from '../../assets/logo-branco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Header = ({ blue, logo, linkMenu }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav id='header' className='nav'>
            <header className={blue ? 'blue' : ''}>
                <div className="nav--logo">
                    <a href='/'>
                        <img src={logo ? logoW : logoB} alt='Logo'/>
                    </a>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                     <li> 
                        <a className={linkMenu ? 'nav-links' : 'nav-links-blue'} href='#sobre'> 
                            Sobre
                        </a> 
                        <a className={linkMenu ? 'nav-links' : 'nav-links-blue'} href='#solucoes'> 
                            Soluções
                        </a>
                        <a className={linkMenu ? 'nav-links' : 'nav-links-blue'} href='#contato'> 
                            Contato
                        </a>
                        <a 
                            className={linkMenu ? 'nav-links' : 'nav-links-blue'} href="https://api.whatsapp.com/send?phone=5548984850006"
                            target="_blank"> 

                            <FontAwesomeIcon icon={faWhatsapp} size='lg'/> 
                        </a>
                    </li>  
                </ul>
            </header>
        </nav>
    )
}

export default Header