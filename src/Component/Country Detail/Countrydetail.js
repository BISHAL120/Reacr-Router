import React from 'react';
import { useParams } from 'react-router-dom';

const Countrydetail = () => {
    const {countryname} = useParams();
    return (
        <div>
            <br />
            <h1>This is detail for : {countryname}🙂🙂</h1>
        </div>
    );
};

export default Countrydetail;