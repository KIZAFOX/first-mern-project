import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Post from './Pages/Post.jsx'
import Search from './Pages/Search.jsx'
import Add from './Pages/Add.jsx'
import Navbar from "./Components/Navbar.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post/:id' element={<Post />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/add' element={<Add />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
