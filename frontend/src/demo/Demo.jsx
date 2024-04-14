import React from 'react';

// Alternative-I
import { Link } from 'react-router-dom';

// Alternative-II
import Welcome from './Welcome2';
import Calculate from './Calculate';
import Series from './Series';

export const Demo = () => {
  return (
    <div>
      <h1>Welcome to Demo</h1>
      {/* Alternative-I */}
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

      {/* Alternative-II */}
      {/* <Welcome /> */}
      {/* <Calculate /> */}
      {/* <Series /> */}
    </div>
  );
};
