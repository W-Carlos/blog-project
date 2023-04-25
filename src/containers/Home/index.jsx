import React, { useState, useEffect } from "react";
import api from "../../axios/config";
import { Link } from "react-router-dom";
import './style.css'

function Home() {
    const [posts, setPosts] = useState([])

    const fetchApi = async () => {
        try {
            const { data } = await api.get('/posts')
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
                                <Link to={`/comentarios/${post.id}`} className="button">Ler mais...</Link>
                            </li>
                        </div>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Home