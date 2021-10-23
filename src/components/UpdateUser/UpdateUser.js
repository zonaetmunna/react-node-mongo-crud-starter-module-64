import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data)
            })
    }, [])

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email };
        setUser(updatedUser)

    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail };
        setUser(updatedUser);
    }
    // handleSubmit
    const handleUpdateUser = e => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    alert('updated successfully');
                    setUser('')

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{id}</p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="" id="" onChange={handleNameChange} value={user.name || ''} />
                <input type="text" name="" id="" onChange={handleEmailChange} value={user.email || ''} />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateUser;