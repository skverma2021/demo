import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../home/Spinner';
import { errText } from '../util/errMsgText';

const Calculate = () => {
  const [theMath, setTheMath] = useState({
    opr: 'sum',
    argOne: '',
    argTwo: '',
  });
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const okSubmit = () => {
    if (theMath.opr == 'div' && parseFloat(theMath.argTwo) < 0.000000001)
      return false;
    if (theMath.argOne === '') return false;
    if (theMath.argTwo === '') return false;
    return true;
  };

  let timeoutId;
  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  const onValChange = (e) => {
    setTheMath({ ...theMath, [e.target.name]: e.target.value });
    setResult('');
    setStatus('');
  };

  const getResult = async (event) => {
    setStatus('busy');
    event.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/api/demo/cal/${theMath.opr}?arg1=${theMath.argOne}&arg2=${theMath.argTwo}`
      );
      setResult(res.data.output);
      setStatus('Success');
    } catch (error) {
      setStatus('Error');
      setMsg(errText(error));
    }
  };

  if (status === 'busy') return <Spinner />;
  if (status === 'Error') {
    timeoutId = setTimeout(goHome, 3000);
    return <h1 style={{ color: 'red' }}>Error: {msg}</h1>;
  }

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
        <h2>Calculate</h2>
        <form onSubmit={getResult}>
          <table style={{ lineHeight: '3' }}>
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
                  <label>Operation</label>
                </td>
                <td>:</td>
                <td>
                  <select
                    name='opr'
                    value={theMath.opr}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                    label='Operation'
                  >
                    <option key='sum' value='sum'>
                      SUM
                    </option>
                    <option key='mul' value='mul'>
                      MUL
                    </option>
                    <option key='div' value='div'>
                      DIV
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Operand1</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    name='argOne'
                    value={theMath.argOne || ''}
                    // type='range'
                    type='number'
                    // min={-999}
                    // max={+999}
                    // onChange={handleArgOneChange}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Operand2</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    name='argTwo'
                    value={theMath.argTwo || ''}
                    // type='range'
                    type='number'
                    // min={-999}
                    // max={+999}
                    // onChange={handleArgTwoChange}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button type='submit' disabled={!okSubmit()}>
                    Submit
                  </button>
                  {/* <button type='submit'>Submit</button> */}
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
                <td>The Result</td>
                <td>:</td>
                <td>{result}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Calculate;
