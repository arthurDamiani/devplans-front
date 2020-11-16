import React, {useEffect, useState} from 'react'
import '../styles/landing.css'
import Header from '../components/Header/index.js'
import ImgHome from '../assets/home1920.png'
import { Typography } from '@material-ui/core'
import Footer from '../components/Footer'

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
        <Header 
            blue={blueHeader} 
            logo={logo}
            linkMenu={linkMenu}
          />

        <div className='home'>
            <img src={ImgHome} alt='home'/>
            <Typography className='slogan'>
              Desenvolvimento de software de um jeito que você nunca viu
            </Typography>
        </div>
        <Footer />
      </>

      
    );
  }
  
  export default Landing;