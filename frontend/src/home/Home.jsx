import React from 'react';
import { Link } from 'react-router-dom';
// import SevenWonders from '../SevenWonders';
// import imgGal from './SevenWonders';

const Home = () => {
  return (
    <>
      <Link to='/whyReact' style={{ marginRight: '15px' }}>
        Why React
      </Link>
      <Link to='/sevenWonders' style={{ marginRight: '15px' }}>
        Seven Wonders
      </Link>
      <Link to='/demo' style={{ marginRight: '15px' }}>
        Demo
      </Link>
      <div style={{ width: '100%', height: '100vh' }}>
        <h1 style={{ color: 'magenta', textAlign: 'center' }}>
          SERN Tutorial - DEMO
        </h1>
        <h5 style={{ color: 'magenta', textAlign: 'center' }}>
          Building an MIS with SQL Server, Express, React, and Node: A
          Comprehensive Guide
        </h5>

        <p style={{ font: 'caption' }}>
          In today’s data-driven world, effective management of information is
          crucial for organizations. Whether you’re a seasoned developer or just
          starting out, this tutorial will walk you through the process of
          building a robust Management Information System (MIS) from scratch.
          We’ll explore the powerful combination of SQL Server for data storage,
          Express.js for server-side development, React for dynamic front-end
          interfaces, and Node.js to tie it all together. By the end of this
          tutorial, you’ll have the skills to create your own MIS, empowering
          decision-makers with real-time insights and enhancing operational
          efficiency.
        </p>
        <p>In this Demo we create three utilities</p>
        <ul>
          <li>a Welcome component to compute age of a person</li>
          <li>a Calculator component to performs simple arithmetic</li>
          <li>
            a Series component that works on a set of values to compute sum,
            average etc.
          </li>
        </ul>
        <p>
          API primer created routes and middleware for Welcome, Calculate and
          Series utilities. Since the frontend was not ready we tested the
          routes using Postman.
        </p>
        <p>
          Now we will build a React application to provide a web based interface
          that will use the API created earlier.
        </p>
        {/* <p>
          <SevenWonders />
        </p> */}
      </div>
    </>
  );
};

export default Home;
