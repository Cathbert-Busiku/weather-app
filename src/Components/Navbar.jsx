import { useNavigate } from "react-router-dom";
import CountryList from "./CountryList";

const Navbar = ({ setCategory, setCountry }) => {
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setCategory(category);
    navigate(`/${category}/us`);
  };

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
    navigate(`/general/${countryCode}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className='card  bg-gradient-ibiza'>
              <h1 className="navbar-brand font-bold text-color tracking-wide m-2">News</h1>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => handleCategoryChange('business')}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => handleCategoryChange('health')}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => handleCategoryChange('science')}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => handleCategoryChange('technology')}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => handleCategoryChange('sports')}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => handleCategoryChange('entertainment')}>Entertainment</div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-click" onClick={() => navigate('/weather')}>Weather</div>
            </li>
          </ul>
          <div className="d-flex">
            <CountryList onSelectCountry={handleCountryChange} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
