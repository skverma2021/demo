import React from 'react';
const Home = () => {
  return (
      <div style={{ width: '100%', height: '100vh', textAlign:'left' }}>
        <h1 style={{ color: 'magenta' }}>
          SERN Tutorial - DEMO
        </h1>
        <h5 style={{ color: 'magenta' }}>
          Project: Basics of APIs and React
        </h5>
        <p>An image slider and three utility components</p>
        <ul>
          <li><b>Welcome</b>: computes age of a person</li>
          <li><b>Calculator</b>: performs simple arithmetic</li>
          <li><b>Series</b>: computes sum,average etc.</li>
        </ul>
      </div>
  );
};

export default Home;
