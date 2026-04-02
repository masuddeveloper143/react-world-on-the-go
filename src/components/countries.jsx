import React, { use, useState } from 'react';
import Country from './countries/country/country';
import './countries/countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [VisitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...VisitedFlags, flag]      
        setVisitedFlags(newVisitedFlags)
    }

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h1>traveling countries: {countries.length}</h1>
            <h2>traveled so far: {visitedCountries.length}</h2>
            <div>
                {
                    VisitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            <ol>
                {
                    visitedCountries.map((country, index) =>
                        <li key={index}>{country.name.common}</li>
                    )
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => (
                        <Country
                            key={country.cca3}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlag={handleVisitedFlag}
                            country={country}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;