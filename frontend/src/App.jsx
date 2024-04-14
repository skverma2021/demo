import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Demo } from './demo/Demo';
import Welcome from './demo/Welcome';
import Calculate from './demo/Calculate';
import Series from './demo/Series';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to='/demo' style={{ marginRight: '15px' }}>
        Demo
      </Link>
      <Routes>
        <Route path='/demo' element={<Demo />} />
        <Route path='/demo/welcome' element={<Welcome />} />
        <Route path='/demo/cal' element={<Calculate />} />
        <Route path='/demo/series' element={<Series />} />
      </Routes>
    </>
  );
}

export default App;
