import '../../styles/carrousel.scss';
import arrow_left from '../../assets/arrow_left.png';
import arrow_right from '../../assets/arrow_right.png';
import { useState, useEffect } from 'react';


const Carrousel = ({ pictures }) => {

    //Le tableau picturesExtended est créé en ajoutant la dernière image (pictures[pictures.length - 1]) au début du tableau pictures et la première image (pictures[0]) à la fin.
    const picturesExtended = [pictures[pictures.length - 1], ...pictures, pictures[0]];

    //activeIndex : Représente l'indice de l'image actuellement affichée. Il est initialisé à 1
    const [activeIndex, setActiveIndex] = useState(1);

    //transitionEnabled : Gère si la transition CSS est active ou non
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const handlePrev = () => setActiveIndex(prevIndex => prevIndex - 1);
     const handleNext = () => setActiveIndex(prevIndex => prevIndex + 1);

     //Calculer l'indice de l'image affichée
    const displayedIndex = activeIndex === 0 ? pictures.length : activeIndex === pictures.length + 1 ? 1 : activeIndex;

    //Gérer les cas où activeIndex atteint 0 (en revenant avant la première image) ou lastIndex + 1 (en allant après la dernière image).
    useEffect(() => {
        const lastIndex = pictures.length;
        const transitionDuration = 500;

        if (activeIndex === 0 || activeIndex === lastIndex + 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setActiveIndex(activeIndex === 0 ? lastIndex : 1);
            }, transitionDuration);
        }
    }, [activeIndex, pictures.length]);

    //Réactiver la transition CSS juste après avoir désactivé temporairement celle-ci pour permettre un changement d'image
    useEffect(() => {
        if (!transitionEnabled) {
            const timer = setTimeout(() => {
                setTransitionEnabled(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [transitionEnabled]);

    return (
        <div className="carrousel">
            <div
                className={`carrousel__inner ${transitionEnabled ? 'transition' : ''}`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                onTransitionEnd={() => {
                    if (activeIndex === 0 || activeIndex === pictures.length + 1) {
                        setTransitionEnabled(false);
                        setActiveIndex(activeIndex === 0 ? pictures.length : 1);
                    }
                }}
            >
                {picturesExtended.map((picture, index) => (
                    <div key={index} className="carrousel__item">
                        <img src={picture} alt={`Appartement ${index}`} />
                    </div>
                ))}
            </div>
            {pictures.length > 1 && (
                <div className="carrousel__controls">
                    <div className="carrousel__arrow carrousel__arrow--left" onClick={handlePrev}>
                        <img src={arrow_left} alt="Flèche gauche" />
                    </div>
                    <span className='carrousel__counter'>{displayedIndex}/{pictures.length}</span>
                    <div className="carrousel__arrow carrousel__arrow--right" onClick={handleNext}>
                        <img src={arrow_right} alt="Flèche droite" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrousel;