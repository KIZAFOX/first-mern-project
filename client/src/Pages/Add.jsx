import React, {useState} from 'react';
import Navbar from "../Components/Navbar.jsx";
import axios from "axios";

const Add = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [content, setContent] = useState("")

    const addPost = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5500/api', {title, author, category, content})

        setTitle("")
        setAuthor("")
        setCategory("")
        setContent("")
    }

    return (
        <div className="add">
            <Navbar />
            <form onSubmit={(e) => addPost(e)}>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="Title" placeholder="Title" value={title} />
                <input onChange={(e) => setAuthor(e.target.value)} type="text" name="Author" placeholder="Author" value={author} />
                <input onChange={(e) => setCategory(e.target.value)} type="text" name="Category" placeholder="Category" value={category} />

                <textarea onChange={(e) => setContent(e.target.value)} name="Content" cols="30" rows="10" placeholder="Content" value={content}></textarea>

                <input type="submit" value="Publish" />
            </form>
        </div>
    );
};

export default Add;