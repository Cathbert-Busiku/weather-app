import defaultImage from '../assets/images/news.webp';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className=" glass-card  text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: '345px', height: '500px' }}>
      <img src={src ? src : defaultImage} style={{ height: '210px', width: '100%' }} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-dark " style={{ flex: '0 1 auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h5>
        <p className="card-text text-dark " style={{ flex: '1 1 auto', overflow: 'hidden', textOverflow: 'ellipsis' }}>{description ? description.slice(0, 90) : 'No Description'}</p>
        <a href={url} target="_blank" className="btn bg-gradient-scooter mt-auto">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
