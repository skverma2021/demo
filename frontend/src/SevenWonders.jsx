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
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <button onClick={() => setCount(count + 1)} style={{ height: '50px' }}>next</button>
      <p style={{textAlign:'right'}}><b>{images[count % 7].txt}</b></p>
      <img
        src={images[count % 7].img}
        alt='Busy...'
      />
    </div>
  )
};
export default SevenWonders;
