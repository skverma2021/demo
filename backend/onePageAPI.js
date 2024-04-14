const express = require('express');
const app = express();

app.use(express.json());
// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.
// You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both
// these requests you are sending data (in the form of some data object) to the server and you
// are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body)
// of that (POST or PUT) Request
app.use(express.urlencoded({ extended: true }));
// The req object contains information about the incoming request such as the URL, query parameters, and HTTP headers.
// The res object represents the HTTP response that will be sent back to the client.

app.post('/welcome', (req, res) => {
  const today = Date.now();
  const theDob = new Date(req.body.dob);
  const oneYear = 365 * 24 * 60 * 60 * 1000; //milliseconds
  const yrs = Math.round(Math.abs((today - theDob) / oneYear));

  const userName = `${
    (req.body.gender === 'M' && 'Mr') || (req.body.gender === 'F' && 'Ms')
  }  ${req.body.name}`;

  const userAge = `${yrs} years`;
  res.json([{ user: { name: `${userName}`, age: `${userAge}` } }]);
});

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`The server started running   on port: ${PORT}`)
);
