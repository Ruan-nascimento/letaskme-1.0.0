import ilustrationImg from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function NewRoom() {

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
          <h2>Criar uma nova Sala</h2>
          <form action="">
            <input 
              type="text" 
              placeholder='Nome da Sala'
            />
            <Button type='submit'>
              Criar Sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}