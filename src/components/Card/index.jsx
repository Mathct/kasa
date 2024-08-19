import '../../styles/card.scss';
import { Link } from 'react-router-dom';


function Card({logement}) {
    return (
      <Link to={`/flat/${logement.id}`} className="kasa-card">
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
    </Link>
    )
  }
  
  export default Card