import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

// Function to create a new chat
export const createNewChat = async (name, participants) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User not authenticated');
        }

        // Post request to create a new chat
        const response = await axios.post(
            `${API_BASE_URL}/api/chats`,
            { name, participants },  // Pass name and participants in the request body
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating chat', error);
        return null;
    }
};

// Component to create a new chat
const NewChat = () => {
    const [name, setName] = useState('');
    const [participants, setParticipants] = useState('');
    const [createdChat, setCreatedChat] = useState(null);

    const handleCreateChat = async (e) => {
        e.preventDefault();
        const participantsArray = participants.split(',').map((p) => p.trim()); // Convert participants to an array
        const chatData = await createNewChat(name, participantsArray);
        setCreatedChat(chatData);
    };

    return (
        <div>
            <h1>Create a New Chat</h1>
            <form onSubmit={handleCreateChat}>
                <div>
                    <label>Chat Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Participants (comma-separated):</label>
                    <input
                        type="text"
                        value={participants}
                        onChange={(e) => setParticipants(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Chat</button>
            </form>

            {createdChat && (
                <div>
                    <h2>New Chat Created!</h2>
                </div>
            )}
        </div>
    );
};

export default NewChat;
