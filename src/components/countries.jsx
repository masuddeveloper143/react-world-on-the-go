import React, { use } from 'react';
import Country from './countries/country/country';

const countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>trabeling countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
        </div>
    );
};

export default countries;

