import React, {useEffect, useState} from 'react'
import '../styles/landing.css'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index'
import sobre from '../assets/sobre1920.png'

function Landing() {
    const [blueHeader, setBlueHeader] = useState(false)
    const [logo, setLogo] = useState(false)
    const [linkMenu, setLinkMenu] = useState(false)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


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
        <div id='sobre' className='sobre'>
          <h2 className='quem-somos'>Quem somos</h2>
          <p className='quem-somos-conteudo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src={sobre} alt='sobre'/> 
        </div>
        <div id='contato'>
          <h2 className="titulo-contato">Contate-nos</h2>
          <p className="texto-contato">Converse diretamente com nossos especialistas</p>
          <form className='form'>
            <input className="input input-name" type="text" name="nome" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Nome" />
            <div className="input-mesma-linha">
              <input className="input input-meio" type="email" name="email" value={mail} onChange={(e) => {setMail(e.target.value)}} placeholder="Email" />
              <input className="input input-meio" type="tel" name="telefone" value={phone} onChange={(e) => {setPhone(e.target.value)}} placeholder="Telefone" />
            </div>
            <textarea placeholder="Mensagem" value={message} onChange={(e) => {setMessage(e.target.value)}} className="input textarea"></textarea>
            <button className="botao-enviar-contato">Enviar mensagem</button>
          </form>
        </div>
        <Footer />
      </>

      
    );
  }
  
  export default Landing;