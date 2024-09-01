import '../../styles/card.scss';
import { Link } from 'react-router-dom';


function Card({logement}) {
    return (
      <Link to={`/fiche/${logement.id}`} className="home-card">
        <img src={logement.cover} alt={logement.title} />
        <div className="name">{logement.title}</div>
    </Link>
    )
  }
  
  export default Card