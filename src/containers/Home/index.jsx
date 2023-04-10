import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css'

function Home() {
    const [posts, setPosts] = useState([])

    const fetchApi = async () => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(data)

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className="container-home">
            <h1>Todos os posts</h1>
            <ul>
                {posts.length === 0 ? (<p className="load">Carregando...</p>) : (
                    posts.map((post) => (
                        <div className="container-items" key={post.id}>
                            <li>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <Link to={`/posts/${post.id}`} className="button">Ler mais...</Link>
                            </li>
                        </div>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Home