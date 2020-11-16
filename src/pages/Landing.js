import React, {useEffect, useState} from 'react'
import '../styles/landing.css'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index'

function Landing() {
    const [blueHeader, setBlueHeader] = useState(false)
    const [logo, setLogo] = useState(false)
    const [linkMenu, setLinkMenu] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
          window.scrollY > 10 ? setBlueHeader(true) : setBlueHeader(false)
        }

        window.addEventListener('scroll', scrollListener)
      }, [blueHeader])

      useEffect(() => {
        const scrollListener = () => {
          window.scrollY > 10 ? setLogo(true) : setLogo(false)
        }
        
        window.addEventListener('scroll', scrollListener)
      }, [logo])

      useEffect(() => {
        const scrollListener = () => {
          window.scrollY > 10 ? setLinkMenu(true) : setLinkMenu(false)
        }

        window.addEventListener('scroll', scrollListener)
      }, [linkMenu])

    return (
      <>
        <div id='home'>
          <Header 
              blue={blueHeader} 
              logo={logo}
              linkMenu={linkMenu}
            />
            <div className='home-content'>
              <h2 className='slogan'>Desenvolvimento de software de um jeito que você nunca viu</h2>
              <a className='botao-saiba-mais'>Saiba mais</a>
            </div>
        </div>
        <div id='contato'>
          <h2 className="titulo-contato">Contate-nos</h2>
          <p className="texto-contato">Converse diretamente com nossos especialistas</p>
          <form className='form'>
            <input className="input input-name" type="text" name="nome" placeholder="Nome" />
            <div className="input-mesma-linha">
              <input className="input input-meio" type="email" name="email" placeholder="Email" />
              <input className="input input-meio" type="tel" name="telefone" placeholder="Telefone" />
            </div>
            <textarea placeholder="Mensagem" className="input textarea"></textarea>
            <button className="botao-enviar-contato">Enviar mensagem</button>
          </form>
        </div>
        <Footer />
      </>

      
    );
  }
  
  export default Landing;