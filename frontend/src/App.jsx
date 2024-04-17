import { Route, Routes, Link } from 'react-router-dom';
import { Demo } from './demo/Demo';
import Welcome from './demo/Welcome';
import Calculate from './demo/Calculate';
import Series from './demo/Series';
import Home from './home/Home';

function App() {
  return (
    <>
      <Link to='/' style={{ marginRight: '15px' }}>
        Home
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/demo/welcome' element={<Welcome />} />
        <Route path='/demo/cal' element={<Calculate />} />
        <Route path='/demo/series' element={<Series />} />
      </Routes>
    </>
  );
}
export default App;
