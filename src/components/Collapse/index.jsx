import '../../styles/collapse.scss';
import chevron from '../../assets/chevron.png';
import { useState } from 'react';


function Collapse({ title, content }) {
    const [isContentOpen, setIsContentOpen] = useState(false);

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
    };

    return (
        <div>
            <div className='title__container' onClick={toggleContent}>
                <span>{title}</span>
                <div className={`arrow__container ${isContentOpen ? 'open' : ''}`} >
                    <img src={chevron} alt="fleche" />
                </div>
            </div>
            <div className={`content ${isContentOpen ? 'open' : ''}`}>{content}</div>
        </div>
    );
}

export default Collapse;