import React, { useState, useEffect } from "react";
import api from "../../axios/config";
import { useParams } from "react-router-dom";
import User from '../../assets/user.png'
import './style.css'

function UserDetails() {
    const { id } = useParams()
    const [userDetails, setUserDetails] = useState({})

    const fetchUserDetails = async () => {
        try {
            const { data } = await api.get(`/users/${id}`)

            const details = {
                id,
                email: data.email,
                name: data.name,
                phone: data.phone,
                username: data.username,
                website: data.website
            }

            console.log(details)
            setUserDetails(details)

        } catch (error) {
            console(error)
        }

    }

    useEffect(() => {
        fetchUserDetails()
    }, [])

    return (
        <div className="container">
            <h1>Detalhes do Usuário</h1>

                <div className="wrapper">
                    <img src={User} alt="imagem-usuário" />
                    <p><b>Email:</b> {userDetails.email}</p>
                    <p><b>Nome:</b> {userDetails.name}</p>
                    <p><b>Telefone:</b> {userDetails.phone}</p>
                    <p><b>Nome de Usuário:</b> {userDetails.username}</p>
                    <p><b>Site:</b> {userDetails.website}</p>
                </div>
        </div>
    )
}

export default UserDetails