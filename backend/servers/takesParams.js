const express = require('express');
const app = express();
const employees = [
  { id: 142, name: 'Mr aaa bbb ccc', age: 25 },
  { id: 291, name: 'Ms xxx yyy zzz', age: 24 },
];
app.get('/api/emp/:id', (req, res) => {
  res.set('Content-Type', 'application/json');
  const empId = parseInt(req.params.id);
  const emp = employees.find((i) => {
    return i.id == empId;
  });
  if (emp) res.json(emp);
  else res.json({ error: 'employee does not exist' });
});
app.listen(3000, () =>
  console.log('The server [takesParams] started running ...')
);
