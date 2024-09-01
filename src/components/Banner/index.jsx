import '../../styles/banner.scss';
import ocean from '../../assets/ocean.webp';
import montagne from '../../assets/montagne.webp';


function Banner({ background }) {
  return (
    <div className='banner'>
      <img 
        src={background === 'ocean' ? ocean : montagne} 
        alt={background} 
        className={background === 'ocean' ? 'darken60' : 'darken30'}
        loading="lazy" // Defer image loading
      />
      <p>{background === 'ocean' ? 'Chez vous, partout et ailleurs' : ''}</p>
    </div>
  );
}

export default Banner;