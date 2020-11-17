import React, {useEffect, useState} from 'react'
import '../styles/landing.css'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index'
import sobre from '../assets/sobre1920.png'

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
        <div className='home'>
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
          <Footer />
      </>

      
    );
  }
  
  export default Landing;