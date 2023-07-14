import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Postdetail = () => {
    const {postid} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[postid])
    return (
        <div>
            <h2>This is post detail for :{postid}</h2>
            <h4>Tittle : {post.title}</h4>
            <p><small>Body : {post.body}</small></p>
        </div>
    );
};

export default Postdetail;