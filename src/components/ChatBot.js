import React, { useState } from 'react';
import { Button, Card, TextField , List , Box, CircularProgress} from '@mui/material';

const ChatBot = ({ apiKey }) => {
  const [request, setRequest] = useState('');
  const [responses, setResponses] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [requestConversation,setRequestConversation] = useState([]); // need to fix this grrrrrrrrr
  const [loading, setLoading] = useState(false);

  const clearChatHistory = () => {
    setResponses([]);
    setChatHistory([]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(`Request: ${request}`);
    const prevMessages = chatHistory.map(({ role, content }) => ({ role, content }));
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${apiKey}` 
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{ "role": "user", "content": request }],
          "temperature": 0.7
        }),
      });

      if (response.ok) {
        setLoading(false);
        const data = await response.json();
        console.log('Form data successfully sent to the API.');
        console.log(data.choices[0].message.content);

        const botReply = data.choices[0].message.content;

        setResponses((prevResponses) => [
          ...prevResponses,
          { userMessage: request, botMessage: botReply },
        ]);
  
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: 'user', content: request },
          { role: 'assistant', content: botReply },
        ]);
      } 
      
      else {
        console.log('Error sending form data to the API.');
        console.log(request);
        console.log(prevMessages);
      }
    } catch (error) {
      console.log('An error occurred while sending the form data.', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box color="primary.main">
          <h2 style = {{width: "100%"}}> Enter Question Here: </h2>
          <TextField
            type="text"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            style={{ width: '100%' }} 
            InputProps={{
              endAdornment: loading && <CircularProgress size={20} />,
            }}
          />
        </Box>
        <Button type="submit">Submit</Button>
        <Button onClick={clearChatHistory}>Clear Chat History</Button>
      </form>
      <div>
      <List>
          {responses.length > 0 ? (
            responses.map((message, index) => (
              <Card key={index}>
                <Box bgcolor="#42a5f5" style={{ width: '100%'}} >User: {message.userMessage}</Box>
                <Box color="primary.main"style={{ width: '100%'}}>Bot: {message.botMessage}</Box>
              </Card>
            ))
          ) : (
            <Card>Enter a question to start chatting!</Card>
          )}
        </List>
      </div>
    </div>
  );
};

export default ChatBot;
