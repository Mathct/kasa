
import '../../styles/about.scss';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { aboutdata } from '../../data/about';


function About() {
    return (
        <div>
            <Banner background={'mountains'}></Banner>
            <div className='kasa-values-container'>
                {aboutdata.map(({ title, content }) =>
                    (
                        <Collapse key={title} title={title} content={content} />
                    )
                )}
            </div>
        </div>
    )
}
export default About;