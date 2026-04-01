import React, { useState } from 'react';
import './country.css'

const country = ({ country }) => {
    const [Visited, setVisited] = useState(false)


    const handleVisited = () => {
        // if(Visited === true){
        //     setVisited(false)
        // }

        // else{
        //     setVisited(true);
        // }

    setVisited(!Visited)
    }

    return (
        <div className={`country ${Visited && 'country-visited'} `}>
            <h4>Name: {country.name.common}</h4>
            <p></p>
            <img src={country.flags.png} alt="" />
            <button onClick={handleVisited}>{

                Visited ? 'visited' : 'not visited'

            }</button>
        </div>
    );
};

export default country;