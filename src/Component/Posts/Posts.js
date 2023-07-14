import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const postid = useParams();
    useEffect(() => {
        // const url = `https://jsonplaceholder.typicode.com/posts${postid}`;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[postid]);
    return (
        <div>
            <h3>This is post details.. Total post {posts.length}</h3>
            {
                posts.map(post => <Link 
                    key={post.id}
                    to={`/posts/${post.id}`}
                    >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;