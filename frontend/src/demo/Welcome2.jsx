import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../home/Spinner';
import { errText } from '../util/errMsgText';

const Welcome = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('F');
  const [dob, setDob] = useState('');
  const [result, setResult] = useState({});
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');

  const okSubmit = () => {
    if (name.length == 0) return false;
    if (gender == '') return false;
    if (dob == '') return false;
    return true;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setResult({});
    setStatus('');
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setResult({});
    setStatus('');
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
    setResult({});
    setStatus('');
  };

  const postUserDetails = async (event) => {
    setStatus('busy');
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/demo/welcome', {
        name,
        gender,
        dob,
      });
      setResult(res.data.user);
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
        <h2>Welcome--------------------</h2>
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
                    value={name}
                    required
                    minLength={3}
                    maxLength={50}
                    onChange={handleNameChange}
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
                    value={gender}
                    onChange={handleGenderChange}
                  /> */}
                  <input
                    type='radio'
                    id='male'
                    name='gender'
                    value='M'
                    checked={gender == 'M'}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor='male'>M</label>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='F'
                    checked={gender == 'F'}
                    onChange={handleGenderChange}
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
                    value={dob}
                    onChange={handleDobChange}
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
                <td>Welcome</td>
                <td>:</td>
                <td>{result.name}</td>
              </tr>
              <tr>
                <td>Your Are</td>
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
