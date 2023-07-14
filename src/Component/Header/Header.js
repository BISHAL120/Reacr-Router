import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../CustomLink/Customlink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy Routing</h1>
            <Customlink to="/">Home</Customlink>
            <Customlink to="/friends">Friends</Customlink>
            <Customlink to="posts">Posts</Customlink>
            <Customlink to="/country">Country</Customlink>
            <Customlink to="/about">About</Customlink>
            
        </div>
    );
};

export default Header;