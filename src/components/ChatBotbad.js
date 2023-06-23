import React, { useState } from 'react';
import { Card, TextField, Button } from '@mui/material';
export function ChatBot({ onClearChatHistory, apiKey }) {


    let API_KEY = "Bearer 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"

    const [request, setRequest] = useState('');
    const [response, setResponse] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse("Loading...")
        console.log(`Request: ${request}`);
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization' : API_KEY
              },
              body: JSON.stringify({ 
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": request}],
                "temperature": 0.7
              }),
            });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Form data successfully sent to the API.');
          setResponse(data.choices[0]['message']['content']);
        } else {
          console.log('Error sending form data to the API.');
        }
      } catch (error) {
        console.log('An error occurred while sending the form data.', error);
      };
    }

    const handleClearChatHistory = () => {
    setRequest('');
    onClearChatHistory();
    };

  return (
        <div>
          <Card>
            <h1>Simple ChatGpt</h1>
          </Card>
          <br />
          <form onSubmit={handleSubmit}>
            <label>
              Enter Question Here:
              <TextField
                type="text"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
              />
            </label>
            <Button type="submit">Submit</Button>
          </form>
          <button onClick={handleClearChatHistory}>Clear Chat History</button>
        </div>
  );
}

// export default ChatBot;