import Banner from '../../components/Banner';
import CardContainer from '../../components/CardContainer';
import { appartements } from '../../data/appartements';



function Home() {
    return (
      <div>
        <Banner background={'ocean'} />
        <CardContainer cards={appartements}/>
      </div>
    )
}

export default Home;

