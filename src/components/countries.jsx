import React, { use } from 'react';
import Country from './countries/country/country';

import './countries/countries.css'



const countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>trabeling countries: {countries.length}</h1>

            <div className='countries'>
                {
                    countries.map(country => <Country country={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default countries;

