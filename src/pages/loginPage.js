import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import { login } from '../utilities/auth'; // Import the login function

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            navigate('/home'); // Redirect to home page or another route
        } else {
            // Handle login failure
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;