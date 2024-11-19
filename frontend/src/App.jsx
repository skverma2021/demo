import { Route, Routes, Link } from 'react-router-dom';
import { Demo } from './demo/Demo';
import Welcome from './demo/Welcome';
import Calculate from './demo/Calculate';
import Series from './demo/Series';
import Home from './home/Home';
import SevenWonders from './SevenWonders';

function App() {
  return (
    <>
      <header>
        <div
          style={{
            display: 'flex',
            justifyContent:'right',
            backgroundColor: 'lightblue',
            height: '10%',
          }}
        >
          <div style={{ display: 'flex', marginTop: '0px' }}>
            <Link to='/' style={{ marginRight: '15px' }}>Home</Link>
          </div>
          <div style={{ display: 'flex', marginTop: '0px' }}>
            <Link to='/sevenWonders' style={{ marginRight: '15px' }}>Seven Wonders</Link>
          </div>
          <div style={{ display: 'flex', marginTop: '0px' }}>
            <Link to='/demo' style={{ marginRight: '15px' }}>Demo</Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sevenWonders' element={<SevenWonders />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/demo/welcome' element={<Welcome />} />
        <Route path='/demo/cal' element={<Calculate />} />
        <Route path='/demo/series' element={<Series />} />
      </Routes>
    </>
  );
}
export default App;
