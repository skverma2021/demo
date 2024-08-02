import React, { Fragment } from 'react';
import { useState } from 'react';
import w0 from './wonders/goldenTemple.gif';
import w1 from './wonders/gomateshwara.gif';
import w2 from './wonders/hampi.gif';
import w3 from './wonders/khajuraho.gif';
import w4 from './wonders/konark.gif';
import w5 from './wonders/nalanda.gif';
import w6 from './wonders/taj.gif';

const SevenWonders = () => {
  const images = [
    {
      img: w0,
      txt: 'Golden Temple',
    },
    {
      img: w1,
      txt: 'Gomateshwara',
    },
    {
      img: w2,
      txt: 'Hampi',
    },
    {
      img: w3,
      txt: 'Khajuraho',
    },
    {
      img: w4,
      txt: 'Konark',
    },
    {
      img: w5,
      txt: 'Nalanda',
    },
    {
      img: w6,
      txt: 'Taj',
    },
  ];

  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => setCount(count + 1)}>next</button>
              <p>{images[count % 7].txt}</p>
              <img
                src={images[count % 7].img}
                alt='Busy...'
                style={{ width: '2000px', margin: 'auto', display: 'block' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
export default SevenWonders;
