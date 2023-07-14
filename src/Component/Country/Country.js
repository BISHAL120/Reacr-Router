import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Country = () => {
    const [countrys, setCountry] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[]);
    return (
        <div>
            <h2>This is Country Component</h2>
            {
               countrys.map(country => <li><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></li>)
            }
        </div>
    );
};

export default Country;