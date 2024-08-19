import '../../styles/header.scss';
import logo from '../../assets/logo-header.png';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
      <header>
        <img src={logo} alt='logo-Kasa' />
        <nav>
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/about" >A propos</NavLink>
        </nav>
      </header>
  )
}

export default Header
