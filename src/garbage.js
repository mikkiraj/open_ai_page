import React, { useState } from 'react';
import {Button, TextField, Card} from '@mui/material'; 
import { ChatBot } from './components/ChatBot';
function Garbage() {
  // const [request, setRequest] = useState('');
  // const [response, setResponse] = useState('');

  const [responses, setResponses] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  let API_KEY = "";

const handleFormSubmit = (request, botMessage) => {
  const chatMessage = {
    userMessage: request,
    botMessage: botMessage,
  };
  setChatHistory((prevChatHistory) => [...prevChatHistory, chatMessage]);
  setResponses((prevResponses) => [...prevResponses, botMessage]);
  console.log('form submitted')
};

const handleClearChatHistory = () => {
  setChatHistory([]);
};


return (
  <div>
    <Card>
      <h1>Simple ChatGpt</h1>
    </Card>
    <br />
    <ChatForm
      onFormSubmit={handleFormSubmit}
      onClearChatHistory={handleClearChatHistory}
      apiKey={API_KEY}
    />
    <p> {responses} </p>
    <div>
      {responses.map((response, index) => (
        <div key={index}>{response}</div>
      ))}
    </div>
    <p> {getMessage} </p>
  </div>
);
}

export default Garbage;
