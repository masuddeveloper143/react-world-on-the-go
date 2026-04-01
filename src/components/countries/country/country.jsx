import React from 'react';
import './country.css'


const country = ({country}) => {
    console.log(country)
    return (
        <div className='country'>
            <h4>Name: {country.name.common}</h4>
            <p></p>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

export default country;