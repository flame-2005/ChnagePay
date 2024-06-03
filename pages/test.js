import React, { useState } from 'react';
const App = () => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const handleButtonClick = (msg) => {
    setVisible(false); // Hide the current message immediately
    setTimeout(() => {
      setMessage(msg);
      setVisible(true); // Show the new message after a delay
    }, 300); // Delay to match the animation duration
  };

  return (
    <div className="App">
      <h1>Message Display Example</h1>
      <button onClick={() => handleButtonClick('This is message 1')}>Show Message 1</button>
      <button onClick={() => handleButtonClick('This is message 2')}>Show Message 2</button>
      <button onClick={() => handleButtonClick('This is message 3')}>Show Message 3</button>

      {visible && (
        <div className="message-display">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default App;
