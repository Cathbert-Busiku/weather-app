import defaultImage from '../assets/images/news.webp';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: '345px', height: '500px' }}>
      <img src={src ? src : defaultImage} style={{ height: '210px', width: '100%' }} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ flex: '0 1 auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h5>
        <p className="card-text" style={{ flex: '1 1 auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>{description ? description.slice(0, 90) : 'No Description'}</p>
        <a href={url} target="_blank" className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
