import React, { useState } from 'react';
import Chat from './components/Chat';
import InputBar from './components/InputBar';

const API_URL = 'http://localhost:5000/api/chat';

const App = () => {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return setMessages(msgs => [...msgs, { from: 'ai', text: 'Pls Enter the input' }]);
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    const userInput = input;
    setInput('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'ai', text: data.reply }]);
    } catch {
      setMessages(msgs => [...msgs, { from: 'ai', text: 'Error: Could not reach server.' }]);
    }
  };

  return (
    <>
      <Chat messages={messages} />
      <InputBar input={input} setInput={setInput} onSend={sendMessage} />
    </>
  );
};

export default App;