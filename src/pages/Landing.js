import React, {useEffect, useState} from 'react'
import '../styles/landing.css'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import sobre from '../assets/sobre1920.png'
import { Button, Container, TextField, Typography } from '@material-ui/core'

function Landing() {
    const [blueHeader, setBlueHeader] = useState(false)
    const [logo, setLogo] = useState(false)
    const [linkMenu, setLinkMenu] = useState(false)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const onSendForm = (dados) => console.log(dados)

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
        <div id='sobre'>
          <div className='lado-esquerdo-sobre'>
            <h2 className='quem-somos'>Quem somos</h2>
            <p className='quem-somos-conteudo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <img className='imagem-sobre' src={sobre} alt='sobre'/> 
        </div>
        <div id='contato'>
          <Typography variant="h2" style={{marginTop: '6rem', marginBottom: '3rem', fontWeight: 'bold'}}>
              Contate-nos
          </Typography>
          <Typography variant="h5" style={{ margin: '0.5rem 1.5rem'}}>
              Converse diretamente com nossos especialistas
          </Typography>
          <Container component='article' maxWidth='sm'>
            <form className='form' onSubmit={
            (event) => {
                event.preventDefault()
                onSendForm({name, mail, phone, message})
            }}>
              <TextField
                className='input input-grande'
                value={name}
                name='name'
                onChange={(event) => { setName(event.target.value) }}
                id='name' 
                label='Nome' 
                type='text' 
                variant='filled' 
                required 
                margin='normal'
                fullWidth 
              />
              <div className='input-meio'>
                <div className='input-pequeno'>
                  <TextField
                    className='input'
                    value={mail}
                    name='name'
                    onChange={(event) => { setMail(event.target.value) }}
                    id='name' 
                    label='Email' 
                    type='mail' 
                    variant='filled' 
                    required 
                    margin='normal' 
                    fullWidth
                  />
                </div>
                <div className='input-pequeno'>
                  <TextField
                    className='input'
                    value={phone}
                    name='name'
                    onChange={(event) => { setPhone(event.target.value) }}
                    id='name' 
                    label='Email' 
                    type='tel' 
                    variant='filled' 
                    required 
                    margin='normal'
                    fullWidth
                  />
                </div>
              </div>
              <TextField
                className='input input-grande'
                value={message}
                name='name'
                onChange={(event) => { setMessage(event.target.value) }}
                id='name' 
                label='Mensagem' 
                type='text' 
                variant='filled' 
                required 
                margin='normal'
                fullWidth 
              />
              <Button variant="contained" color="primary" fullWidth style={{marginBottom: '3rem', marginTop: '1rem', backgroundColor: '#033249'}}>
                Enviar mensagem
              </Button>
            </form>
            
        </Container> 

        </div>
        <Footer />
      </>

      
    );
  }
  
  export default Landing;