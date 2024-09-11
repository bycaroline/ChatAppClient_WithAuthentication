import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

export const getChats = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User not authenticated');
        }

        const response = await axios.get(`${API_BASE_URL}/api/chats`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching chats', error);
        return [];
    }
};


const ChatList = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            const chatData = await getChats();
            setChats(chatData);
        };

        fetchChats();
    }, []);

    return (
        <div>
            <h1>These are your current chats:</h1>
            <ul>
                {chats.length > 0 ? (
                    chats.map((chat, index) => (
                        <li key={chat.id || index}>
                            <p>Name:</p>
                            {chat.name}
                            <p>Participants:</p>
                            {chat.participants}</li>
                    ))
                ) : (
                    <li>No chats available</li>
                )}
            </ul>
        </div>
    );
};

export default ChatList;





