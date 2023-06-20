import React, { useState } from 'react';
import {Button, TextField, Card} from '@mui/material'; 

function App() {
  const [request, setRequest] = useState('');
  const [responses, setResponses] = useState([]);

  
  let API_KEY = "Bearer"
  ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setResponse("Loading...")
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
      console.log(data.choices[0]['message']['content']);
      setResponses((prevResponses) => [...prevResponses, data.choices[0]['message']['content']]);
      // setResponse(data.choices[0]['message']['content']);
    } else {
      console.log('Error sending form data to the API.');
    }
  } catch (error) {
    console.log('An error occurred while sending the form data.', error);
  };
}

const clearChatHistory = () => {
  setResponses([]);
};

  return (
    <div>
      <Card>
      <h1>Simple ChatGpt</h1>
      </Card>
      
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Question Here  :     

          <TextField 
            type="text"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </label>
        <Button type="submit">Submit</Button>
      </form>
      <div>
        {responses.map((response, index) => (
      <div key={index}>{response}</div>
        ))}
      </div>
      <button onClick={clearChatHistory}>Clear Chat History</button>

    </div>
  );
}

export default App;
