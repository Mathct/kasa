import '../../styles/tags.scss';

// ajout des mots clés

function Tags({ tags }) {
    return (
      <div className='group-tags'>
        {tags.map(tag => ( <div key={tag} className='tag'>{tag}</div>))}
      </div>
    );
  }
  
export default Tags;