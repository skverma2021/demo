import React from 'react';

import { Link } from 'react-router-dom';

export const Demo = () => {
  return (
    <div>
      <h1>Welcome to Demo</h1>
      <ul>
        <li>
          <Link to={`./welcome`}>Welcome</Link>
        </li>
        <li>
          <Link to={`./cal`}>Calculate</Link>
        </li>
        <li>
          <Link to={`./series`}>Series</Link>
        </li>
      </ul>
    </div>
  );
};
