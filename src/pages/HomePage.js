import React from 'react';
import ChatList from '../components/ChatList';
import CreateNewChat from '../components/CreateNewChat'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <h2>Your current chats:</h2>
            <ChatList />

            <h2>Create a new chat:</h2>
            <CreateNewChat />
        </div>);



};

export default HomePage;