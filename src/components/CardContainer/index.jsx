import '../../styles/cardcontainer.scss';
import Card from '../../components/Card';


function CardContainer({cards}) {
  return (
      <div className='home-group-card'>
          {cards.map(card => (
              <Card key={card.id} logement={card}/>
          ))}
      </div>
  );
}
  
export default CardContainer