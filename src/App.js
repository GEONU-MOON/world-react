import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('API 호출 에러:', error));
  }, []);

  return (
    <div>
      <h1>React and Express Integration Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
