const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({ method: req.method, path: req.path });
});
app.listen(3000, () => console.log('The server [justListen] started running ...'));