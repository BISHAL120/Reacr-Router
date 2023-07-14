import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendid} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/users/${friendid}`
        fetch(URL)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h2>This is detail about dosto {friendid}</h2>
            <h3>Name : {friend.name}</h3>
            <h4>Email : {friend.email}</h4>
            <h6>Website : {friend.website}</h6>
            <p>City : {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;