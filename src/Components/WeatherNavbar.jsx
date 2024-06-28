import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import search from '../assets/icons/search.svg';
import { useStateContext } from '../Context';


const WeatherNavbar = ({ setCategory, setCountry}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const { setPlace } = useStateContext();

    const submitCity = () => {
        setPlace(input);
        setInput('');
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
        navigate(`/${category}/us`);
    };

    const handleCountryChange = (countryCode) => {
        setCountry(countryCode);
        navigate(`/general/${countryCode}`);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid ">

                <a className="navbar-brand" href="#">
                    <div className='card  bg-gradient-ibiza'>
                        <h1 className="navbar-brand font-bold text-color tracking-wide m-2">Weather App</h1>
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

                  
                        <div className="input-group w-25">
                            <input
                                type="text"
                                className="form-control bg-gradient-scooter"
                                placeholder="Search city"
                                aria-label="Search city"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        submitCity();
                                    }
                                }}
                            />
                            <button className="btn btn-outline-secondary bg-light" type="button" onClick={submitCity}>
                                <img src={search} alt="search" className="img-fluid" />
                            </button>
                        </div>
                   


                </div>
            </div>
        </nav>
    );
}

export default WeatherNavbar;
