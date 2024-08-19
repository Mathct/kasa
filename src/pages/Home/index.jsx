import Banner from '../../components/Banner';
import CardContainer from '../../components/CardContainer';
import { logements } from '../../data/logements';



function Home() {
    return (
      <div>
        <Banner background={'shore'} />
        <CardContainer cards={logements}/>
      </div>
    )
}

export default Home;

