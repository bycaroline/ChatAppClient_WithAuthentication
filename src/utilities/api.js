import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

// Example function to get data from an endpoint
export const getData = async () => {
    try {
        const response = await api.get('/your-endpoint');
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};