const express = require('express');
const cors = require('cors');
const app = express();
const demo = require('./routes/demo');

const PORT = 3000;

// deleted master

app.use(cors());
// Alternatively, you can specify the allowed origins explicitly
// const allowedOrigins = ['http://localhost:5173'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// app.use(cors(corsOptions));

// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.
// You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both
// these requests you are sending data (in the form of some data object) to the server and you
// are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body)
// of that (POST or PUT) Request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/demo', demo);

app.listen(PORT, () =>
  console.log(`The server started running the API on port: ${PORT}`)
);
