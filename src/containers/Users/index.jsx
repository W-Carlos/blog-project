import React, { useState, useEffect } from "react";
import api from "../../axios/config";
import './style.css'

function Users() {
    const [users, setUsers] = useState([])

    const fetchApi = async () => {
        const { data } = await api.get('/users')

        console.log(data)
        setUsers(data)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className="users">
            <h2>Todos os Usuários</h2>
            <ul className="list-users">
                {
                    users.map((user) => (
                        <li key={user.id} className="user-container">
                            <p>
                                <b>Nome: </b> 
                                {user.name}
                            </p>
                            <p>
                                <b>Usuário: </b>
                                {user.username}
                            </p>
                            <p>
                                <b>Email: </b>
                                {user.email}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users