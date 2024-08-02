import React from 'react';
import { useState } from 'react';

export const MyComponent = () => {
  const [content, setContent] = useState('A');
  const changeToB = () => {
    setContent('B');
  };

  return (
    <div>
      <p>{content}</p>
      <button onClick={changeToB}>Change to B</button>
    </div>
  );
};
