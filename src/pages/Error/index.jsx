import '../../styles/error.scss';
import { Link } from 'react-router-dom';


function Error() {
    return (
      <div className='error404'>
        <div className="nb404" >404</div>
        <div className='oups'>Oups ! La page que vous demandez n'existe pas.</div>
        <Link to="/" className="retour">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
  export default Error