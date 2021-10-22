import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    // handle submit
    const handleSubmit = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="" id="" ref={nameRef} placeholder="name" />
                <input type="text" name="" id="" ref={emailRef} placeholder="name" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;