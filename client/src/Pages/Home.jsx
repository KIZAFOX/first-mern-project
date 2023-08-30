import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get('http://localhost:5500/api')
            setPosts(data)
        }

        fetchPosts()
    })

    return (
        <div>
            <Navbar />
            {
                posts.map((post) =>
                <Card
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    author={post.author}
                    category={post.category}
                />)
            }
        </div>
    );
};

export default Home;