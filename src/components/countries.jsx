import React, { use } from 'react';
import Country from './countries/country/country';
import "./countrie.css";
const countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div className='countries'>
            <h1>trabeling countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
        </div>
    );
};

export default countries;

