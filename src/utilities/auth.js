import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/login`, { email, password });
        // Assuming the backend returns a token or some success status
        const { token } = response.data;
        if (token) {
            localStorage.setItem('token', token); // Store the token in localStorage
            return true;
        }
        return false;
    } catch (error) {
        console.error('Login failed', error);
        return false;
    }
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};