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
            <div className='group-collapse' onClick={toggleContent}>
                <span>{title}</span>
                <div className={`chevron ${isContentOpen ? 'open' : ''}`} >
                    <img src={chevron} alt="chevron" />
                </div>
            </div>
            <div className={`text ${isContentOpen ? 'open' : ''}`}>{content}</div>
        </div>
    );
}

export default Collapse;