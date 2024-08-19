import '../../styles/banner.scss';
import shore from '../../assets/shore.webp';
import mountains from '../../assets/mountains.webp';


function Banner({ background }) {
  return (
    <div className='kasa-banner'>
      <img 
        src={background === 'shore' ? shore : mountains} 
        alt={background} 
        className={background === 'shore' ? 'darken60' : 'darken30'}
        loading="lazy" // Defer image loading
      />
      <p>{background === 'shore' ? 'Chez vous, partout et ailleurs' : ''}</p>
    </div>
  );
}

export default Banner;