import { useState } from 'react';

import w0 from './wonders/goldenTemple.gif';
import w1 from './wonders/gomateshwara.gif';
import w2 from './wonders/hampi.gif';
import w3 from './wonders/khajuraho.gif';
import w4 from './wonders/konark.gif';
import w5 from './wonders/nalanda.gif';
import w6 from './wonders/taj.gif';

// Components encapsulate their own logic and UI, promoting reusability, maintainability, and modularity. 
// Javascript Drudgery Avoided: Lack of modularity and reusability.

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

  // React's state management ensures only the necessary parts of the UI are updated, improving performance. 
  // Javascript Drudgery Avoided: Manually updating the DOM for each state change

  // React's useState hook provides a consistent and predictable way to manage state, ensuring the UI updates correctly based on the current state. 
  // Javascript Drudgery Avoided: Manually managing state and ensuring consistency throughout the application.

  const [count, setCount] = useState(0);
  return (
    <div >

      {/* Declarative syntax describes what the UI should look like based on the state, making the code more readable and easier to maintain. 
        Javascript Drudgery Avoided: Creating and appending DOM elements manually. */}

      {/* : Clean and integrated event handling within the JSX, automatically binding the event handler to the button click. 
        Javascript Drudgery Avoided: Manually setting up and managing event listeners. */}

      <button onClick={() => setCount(count + 1)}>
        next
      </button>

      {/* React's virtual DOM and efficient reconciliation process ensure that only the parts of the DOM that need updating are modified, leading to better performance. 
      Javascript Drudgery Avoided: Ensuring only necessary parts of the DOM are updated manually. */}

      <p>
        <b>{images[count % 7].txt}</b>
      </p>
      <img
        src={images[count % 7].img}
        alt='Busy...'
      />
    </div>
  )
};
export default SevenWonders;
