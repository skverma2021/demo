const express = require('express');
const app = express();
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({
    method: req.method,
    path: req.path,
    queryParameter: req.query,
    theSum: parseInt(req.query.x) + parseInt(req.query.y),
  });
});
app.listen(3000, () => console.log('The server [takesQueryParams] started running ...'));