import '../../styles/tags.scss';



function Tags({ tags }) {
    return (
      <div className='group-tags'>
        {tags.map(tag => ( <div key={tag} className='tag'>{tag}</div>))}
      </div>
    );
  }
  
export default Tags;