import React from 'react';
const Home = () => {
  return (
    <>
      <div style={{ width: '100%', height: '100vh' }}>
        <h1 style={{ color: 'magenta', textAlign: 'center' }}>
          SERN Tutorial - DEMO
        </h1>
        <h5 style={{ color: 'magenta', textAlign: 'center' }}>
          Building an MIS with SERN
        </h5>
        <p>In this Demo we create three utilities</p>
        <ul>
          <li>a Welcome component to compute age of a person</li>
          <li>a Calculator component to performs simple arithmetic</li>
          <li>a Series component that computes sum,average etc.</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
