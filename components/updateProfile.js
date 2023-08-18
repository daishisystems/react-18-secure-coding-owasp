import React, { useState, useEffect } from 'react';

function UpdateProfile() {
    const [csrfToken, setCsrfToken] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the CSRF token when the component mounts
        fetch('http://localhost:3003/csrf-token')
            .then(response => response.text())
            .then(token => {
                setCsrfToken(token);
            });
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = () => {
        // Make a POST request using the fetched CSRF token
        fetch('http://localhost:3003/updateProfile', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json',
                'CSRF-Token': csrfToken
            }
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);
        });
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter new name" 
                value={name} 
                onChange={handleNameChange}
            />
            <button onClick={handleSubmit}>Update Profile</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default UpdateProfile;
