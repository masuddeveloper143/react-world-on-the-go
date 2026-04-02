import React, { useState } from 'react';
import './country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country); // MUST
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h4>Name: {country.name.common}</h4>
            <img src={country.flags.png} alt="" />

            <button onClick={handleVisited}>
                {visited ? 'visited' : 'not visited'}
            </button>

            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;