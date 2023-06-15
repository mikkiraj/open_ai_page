import React, { useState } from 'react';

function App() {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');

  let API_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log(data)
    } else {
      console.log('Error sending form data to the API.');
    }
  } catch (error) {
    console.log('An error occurred while sending the form data.', error);
  };
}

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Question Here:
          <input
            type="text"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p> {response} </p>
    </div>
  );
}

export default App;
