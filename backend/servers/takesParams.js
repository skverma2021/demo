const express = require('express');
const app = express();
app.get('/api/:x/:y', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({
    method: req.method,
    path: req.path,
    parameters: req.params,
    parameter_x: req.params.x,
    parameter_y: req.params.y,
    theSum: parseInt(req.params.x) + parseInt(req.params.y),
  });
});
app.listen(3000, () => console.log('The server [takesParams] started running ...'));