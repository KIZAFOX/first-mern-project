import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar.jsx";

const Post = () => {
    let { id } = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get(`http://localhost:5500/api/post/${id}`)
            setPost(data)
        }

        fetchPost()
    })

    return (
        <div className="post">
            <Navbar />
            <h1>{post.title}</h1>
            <h2>{post.author} - {post.category}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default Post;