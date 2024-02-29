import ilustrationImg from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'
import googleIconImage from '../assets/images/google-icon.svg'


import '../styles/auth.scss'
import { Button } from '../components/Button'
import { NavLink } from 'react-router-dom'

// import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'

export function Home() {

  return (
    <div id='page-auth'>
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as Duvidas de Sua audiência em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImage} alt="Letmeask" />
          <NavLink to="#" title='Criar Sala'>
            <button className='create-room'>
              <img src={googleIconImage} alt="Logo do Google" />
              Crie sua Sala com o Google
            </button>
          </NavLink>
          <div className='separator'>ou entre em uma sala</div>
          <form action="">
            <input 
              type="text" 
              placeholder='Digite o código da sala'
            />
            
            <Button type='submit'>
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}