import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    } ,[])
    return (
        <div>
            <h2>This is my Friends page</h2>
            <p><small>parla kicu taka dhar dis..: {friends.length}</small></p>
            {
                friends.map(friend => <Friend key = {friend.id} friend = {friend}></Friend>)
            }
        </div>
    );
};

export default Friends;