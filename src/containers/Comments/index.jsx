import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../axios/config";
import './style.css'

function Comments() {
    const { id } = useParams()
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const { data } = await api.get(`post/${id}/comments`)

        console.log(data)
        setComments(data)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div className="container">
            <h1>Comentários:</h1>

            {comments.length === 0 ? (<p className="load">Carregando...</p>) : (
                comments.map((item) => (
                    <div className="item-list" key={item.id}>
                        <p><b>{item.name}</b></p>
                        <p>{item.body}</p>
                        <p><b>{item.email}</b></p>
                    </div>
                ))
            )
            }

        </div >
    )
}

export default Comments