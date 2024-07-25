const express = require('express');
const app = express();
app.use(express.json());
app.post('/api', (req, res) => {
  res.json({
    method: req.method,
    path: req.path,
    theBody: req.body,
    theSum: parseInt(req.body.x) + parseInt(req.body.y),
  });
});
app.listen(3000, () => console.log('The server [requestBody] started running ...'));
