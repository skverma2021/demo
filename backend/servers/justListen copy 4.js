// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.set('Content-Type', 'application/json');
//   res.json({ method: req.method, path: req.path });
// });
// app.listen(3000, () => console.log('The server started running ...'));

// const express = require('express');
// const app = express();
// app.get('/api/:x/:y', (req, res) => {
//   res.set('Content-Type', 'application/json');
//   res.json({
//     method: req.method,
//     path: req.path,
//     parameters: req.params,
//     parameter_x: req.params.x,
//     parameter_y: req.params.y,
//     theSum: parseInt(req.params.x) + parseInt(req.params.y),
//   });
// });
// app.listen(3000, () => console.log('The server started running ...'));

// const express = require('express');
// const app = express();
// app.get('/api', (req, res) => {
//   res.set('Content-Type', 'application/json');
//   res.json({
//     method: req.method,
//     path: req.path,
//     queryParameter: req.query,
//     theSum: parseInt(req.query.x) + parseInt(req.query.y),
//   });
// });
// app.listen(3000, () => console.log('The server started running ...'));

const express = require('express');
const app = express();
// app.use(express.json());
// Middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded());
app.post('/api', (req, res) => {
  res.json({
    method: req.method,
    path: req.path,
    theBody: req.body,
    theSum: parseInt(req.body.x) + parseInt(req.body.y),
  });
});
app.listen(3000, () => console.log('The server started running ...'));
