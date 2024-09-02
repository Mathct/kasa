import '../../styles/rating.scss';
import starGrey from '../../assets/star_grey.png';
import starPink from '../../assets/star_pink.png';


function Rating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<img key={i} src={starPink} alt="etoile" />);
        } else {
            stars.push(<img key={i} src={starGrey} alt="vide" />);
        }
    }

    return (
        <div className='rating'>{stars}</div>
    );
}
  
export default Rating;