import React, { useState, useEffect } from "react";
import api from "../../axios/config";
import { Link } from "react-router-dom";
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
                {users.length === 0 ? (<p className="load">Carregando...</p>) : (
                    users.map((user) => (

                        <li key={user.id} className="user-container">
                            <Link to={`/usuarios/${user.id}`}>
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
                            </Link>
                        </li>

                    ))
                  )
                }
            </ul>
        </div>
    )
}

export default Users