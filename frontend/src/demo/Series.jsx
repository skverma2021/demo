import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../home/Spinner';
import { errText } from '../util/errMsgText';

const Series = () => {
  const [arrayStr, setArrayStr] = useState('');
  const [theResult, setResult] = useState({
    seriesSum: '',
    seriesMax: '',
    seriesMin: '',
    seriesSortedAsc: '',
    seriesSortedDsc: '',
    seriesAvg: '',
  });

  const [formTouched, setFormTouched] = useState(false);
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');

  const handleArrayChange = (e) => {
    setArrayStr(e.target.value);
    setFormTouched(true);
    setStatus('Submit to continue...');
    setResult({});
  };
  const getResult = async (event) => {
    setStatus('busy');
    event.preventDefault();
    try {
      const ar = JSON.parse('[' + arrayStr + ']');
      const res = await axios.post(`http://localhost:3000/api/demo/series`, {
        series: ar,
      });
      setResult(res.data);
      setStatus('Success');
    } catch (error) {
      setStatus('Error');
      setMsg(errText(error));
    }
  };

  if (status === 'busy') return <Spinner />;
  if (status === 'Error') return <h1 style={{ color: 'red' }}>Error: {msg}</h1>;

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Array Operations</h2>
        <form onSubmit={getResult}>
          <table style={{ lineHeight: '2' }}>
            <tbody>
              <tr>
                <td colSpan={3} align='right'>
                  <Link to={`../demo`}>Demo</Link>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <label>Your Array [values separated by comma]</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    name='arrayStr'
                    size={'60'}
                    value={arrayStr}
                    onChange={handleArrayChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button type='submit' disabled={formTouched == false}>
                    Submit
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{ color: `${status !== 'Success' ? 'red' : 'blue'}` }}
                >
                  <b>{status}</b>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sum</td>
                <td>:</td>
                <td>{theResult.seriesSum}</td>
              </tr>
              <tr>
                <td>Max</td>
                <td>:</td>
                <td>{theResult.seriesMax}</td>
              </tr>
              <tr>
                <td>Min</td>
                <td>:</td>
                <td>{theResult.seriesMin}</td>
              </tr>
              <tr>
                <td>Sorted[asc]</td>
                <td>:</td>
                <td>{theResult.seriesSortedAsc}</td>
              </tr>
              <tr>
                <td>Sorted[desc]</td>
                <td>:</td>
                <td>{theResult.seriesSortedDsc}</td>
              </tr>
              <tr>
                <td>Avg</td>
                <td>:</td>
                <td>
                  {status == 'Success' &&
                    parseFloat(theResult.seriesAvg).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Series;
