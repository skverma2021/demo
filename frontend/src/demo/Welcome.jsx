import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../home/Spinner';
import { errText } from '../util/errMsgText';

const Welcome = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    gender: 'F',
    dob: '',
  });
  const [result, setResult] = useState({});
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const okSubmit = () => {
    if (userInput.name.length == 0) return false;
    if (userInput.gender == '') return false;
    if (userInput.dob == '') return false;
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
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    setResult('');
    setStatus('');
  };

  const postUserDetails = async (event) => {
    setStatus('busy');
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/demo/welcome', {
        name: userInput.name,
        gender: userInput.gender,
        dob: userInput.dob,
      });
      setResult(res.data.user);
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
        <h2>Welcome</h2>
        <form onSubmit={postUserDetails}>
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
                  <label>Name</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    name='name'
                    size={'60'}
                    type='text'
                    value={userInput.name}
                    required
                    minLength={3}
                    maxLength={50}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender</label>
                </td>
                <td>:</td>
                <td>
                  {/* <input
                    name='gender'
                    value={userInput.gender}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                  /> */}
                  <input
                    type='radio'
                    id='male'
                    name='gender'
                    value='M'
                    checked={userInput.gender == 'M'}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                  />
                  <label htmlFor='male'>M</label>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='F'
                    checked={userInput.gender == 'F'}
                    onChange={(e) => {
                      return onValChange(e);
                    }}
                  />
                  <label htmlFor='female'>F</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>DOB</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    name='dob'
                    type='date'
                    value={userInput.dob}
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
                <td>Welcome</td>
                <td>:</td>
                <td>{result.name}</td>
              </tr>
              <tr>
                <td>You Are</td>
                <td>:</td>
                <td>{result.age}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Welcome;
