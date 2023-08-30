import React, {useEffect, useState} from 'react';
import Navbar from "../Components/Navbar.jsx";
import axios from "axios";
import Card from "../Components/Card.jsx";

const Search = () => {
    const [query, setQuery] = useState("")
    const [posts, setPosts] = useState([])

    const searchPosts = async (e) => {
        e.preventDefault()

        const { data } = await axios.get(`http://localhost:5500/api/search/${query}`)
        setPosts(data)
    }

    return (
        <div className="search">
            <Navbar />
            <form onSubmit={(e) => searchPosts(e)}>
                <input onChange={(e) => setQuery(e.target.value)} type="search" />
                <input type="submit" value="SEARCH" />
            </form>
            {
                posts.map((post) => (
                    <Card
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        author={post.author}
                        category={post.category}
                        content={post.content}
                    />))
            }
        </div>
    );
};

export default Search;