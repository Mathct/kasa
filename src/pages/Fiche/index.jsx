

import '../../styles/fiche.scss';
import { useParams } from 'react-router-dom';
import { appartements } from '../../data/appartements';
import Error from '../Error';
import Carrousel from '../../components/Carrousel';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating'; 
import Collapse from '../../components/Collapse';


function Fiche () {
  const { fichenb } = useParams();
  const apparts = appartements.filter(appart => appart.id === fichenb);

  if (apparts.length === 0)  {
    return <Error />
  }
  else  {
    const appart = apparts[0];

    const equipements = appart.equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ))

    return (
    <div>
      <div className='fiche'>
          < Carrousel pictures={appart.pictures}/>
          <div className='fiche-infos'>
            <div className='fiche-tags'>
              <h2>{appart.title}</h2>
              <p>{appart.location}</p>
              < Tags tags={appart.tags} />
            </div>
            <div className='proprietaire-ratings'>
              <div className='proprietaire'>
                <h3>{appart.host.name}</h3>
                <img src={appart.host.picture} alt="proprietaire"/>
              </div>
              < Rating rating={appart.rating} />
              </div>
          </div>
          <div className='fiche-desc'>
              <Collapse title={'Description'} content={appart.description} />
              <Collapse title={'Équipements'} content={equipements} />
          </div>
        </div>
     </div>
    )
  }
}

export default Fiche;
