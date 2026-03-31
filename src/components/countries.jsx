import React, { use } from 'react';

const countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>trabeling countries: {countries.length}</h1>
        </div>
    );
};

export default countries;

