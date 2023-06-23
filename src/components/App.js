// import React, { useState } from 'react';
// import {Button, TextField, Card} from '@mui/material'; 

// function App() {
//   const [request, setRequest] = useState('');
//   //move this to chatbot
//   const [responses, setResponses] = useState([]);
//   const [chatHistory, setChatHistory] = useState([]); //use this to save the history of chat ookkk
  
//   let API_KEY = "Bearer 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"
//   ;
  
//   const clearChatHistory = () => {
//     setRequest('');
//     setChatHistory([]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(`Request: ${request}`);
//     const prevMessages = chatHistory.map(({ role, content }) => ({ role, content }));
//     console.log(chatHistory,'this is chat')
//     try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization' : API_KEY
//           },
//           body: JSON.stringify({ 
//             "model": "gpt-3.5-turbo",
//             // "messages": [...prevMessages, { "role" : 'user', "content": request}],
//             "messages": [{"role": "user", "content": request}],
//             "temperature": 0.7
//           }),
//         });

      
    
//     if (response.ok) {
//       const data = await response.json();
//       console.log('Form data successfully sent to the API.');
//       console.log(data.choices[0]['message']['content']);
//       console.log(data)
      
//       setResponses((prevResponses) => [...prevResponses, data.choices[0]['message']['content']]);
//       // setResponse(data.choices[0]['message']['content']);
    
//       const chatMessage = {
//         userMessage: request,
//         botMessage:  data.choices[0]['message']['content'],
//       };
      
//       setChatHistory((prevChatHistory) => [...prevChatHistory, chatMessage]);
//       console.log(chatHistory, "yo chat history after promise")
//       console.log(chatMessage, "chat message")
  
//     } else {
//       console.log('Error sending form data to the API.');
//       console.log(request)
//       console.log(prevMessages)
//     }
//   } catch (error) {
//     console.log('An error occurred while sending the form data.', error);
//   };

// }



//   return (
//     <div>
//       <Card>
//       <h1>Simple ChatGpt</h1>
//       </Card>
      
//       <br></br>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter Question Here  :     

//           <TextField 
//             type="text"
//             value={request}
//             onChange={(e) => setRequest(e.target.value)}
//           />
//         </label>
//         <Button type="submit">Submit</Button>
//       </form>
//       <p> {responses} </p>
//       <div>
//         {responses.map((response, index) => (
//       <div key={index}>{response}</div>
//         ))}
//       </div>
//       <button onClick={clearChatHistory}>Clear Chat History</button>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Card } from '@mui/material';
import ChatBot from './ChatBot';

function App() {
  const API_KEY = "";

  return (
    <div>
      <Card>
        <h1>Simple ChatGpt</h1>
      </Card>
      <br />
      <ChatBot apiKey={API_KEY} />
    </div>
  );
}

export default App;
