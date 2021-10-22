import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/users/updates/${id}`;
        fetch(url)
            .then(res => res.json)
            .then(data => {
                setUser(data)
            })
    }, [])
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{id}</p>
        </div>
    );
};

export default UpdateUser;