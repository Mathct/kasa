import '../../styles/footer.scss';
import logo from '../../assets/logo-footer.png';


function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo-Kasa' />
      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer