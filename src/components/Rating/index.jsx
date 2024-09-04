import '../../styles/rating.scss';
import starGrey from '../../assets/star_grey.png';
import starPink from '../../assets/star_pink.png';

//Ajout des étoiles

function Rating({ rating }) {
    const liststars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            liststars.push(<img key={i} src={starPink} alt="etoile" />);
        } else {
            liststars.push(<img key={i} src={starGrey} alt="sans etoile" />);
        }
    }

    return (
        <div className='etoiles'>{liststars}</div>
    );
}
  
export default Rating;