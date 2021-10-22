import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)

            })
    }, [])

    // handleDelete
    const handleDeleteUser = (id) => {
        const proceeded = window.confirm('are you sure ,you want to delete?');
        if (proceeded) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successful');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
        }

    }

    return (
        <div>

            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name}: {user.email} <Link to={`/users/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDeleteUser(user._id)}>x</button></li>)
                }
            </ul>

        </div >
    );
};

export default Users;