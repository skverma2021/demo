const express = require('express');
const router = express.Router();
const calCheck = require('../middleware/calCheck');
const seriesCheck = require('../middleware/seriesCheck');
const welcomeCheck = require('../middleware/welcomeCheck');

router.post('/welcome', welcomeCheck, (req, res) => {
  if (req.userData.inValid) {
    res.status(400).json({ eCode: 'ERROR', msg: req.userData.msg });
    return;
  }

  const today = Date.now();
  const theDob = new Date(req.body.dob);
  const oneYear = 365 * 24 * 60 * 60 * 1000; //milliseconds
  const yrs = Math.abs((today - theDob) / oneYear).toFixed(2);

  const userName = `${
    (req.body.gender === 'M' && 'Mr') || (req.body.gender === 'F' && 'Ms')
  }  ${req.body.name}`;

  const userAge = `${yrs} years`;

  res.status(200).json({
    eCode: 'Success',
    msg: 'valid data',
    user: { name: `${userName}`, age: `${userAge}` },
  });
});
router.get('/cal/:opr', calCheck, (req, res) => {
  if (req.userData.inValid) {
    res.status(400).json({ eCode: 'ERROR', msg: req.userData.msg });
    return;
  }
  const resultSum = parseFloat(req.query.arg1) + parseFloat(req.query.arg2);
  const resultMul = parseFloat(req.query.arg1) * parseFloat(req.query.arg2);
  const resultDiv = parseFloat(req.query.arg1) / parseFloat(req.query.arg2);
  const outputMsg =
    (req.params.opr == 'sum' && `Addition is : ${resultSum}`) ||
    (req.params.opr == 'mul' && `Multiplication is : ${resultMul}`) ||
    (req.params.opr == 'div' && `Division is : ${resultDiv}`);
  res.status(200).json({
    eCode: 'Success',
    msg: 'Operation performed successfully!',
    theJob: {
      theOperation: req.params.opr,
      operand1: req.query.arg1,
      operand2: req.query.arg2,
    },
    output: `${outputMsg}`,
  });
});
router.post('/series', (req, res) => {
  const theArray = req.body.series;
  const theSum = theArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const theMax = theArray.reduce((accumulator, currentValue) =>
    accumulator > currentValue ? accumulator : currentValue
  );
  const theMin = theArray.reduce((accumulator, currentValue) =>
    accumulator < currentValue ? accumulator : currentValue
  );

  const asc = [...theArray];
  const dsc = [...theArray];

  const sortAsc = asc.sort((a, b) => a - b);
  const sortDsc = dsc.sort((a, b) => b - a);

  const theAvg = theSum / theArray.length;

  res.status(200).json({
    eCode: 'Success',
    msg: 'Operation performed successfully',
    seriesSum: `${theSum}`,
    seriesMax: `${theMax}`,
    seriesMin: `${theMin}`,
    seriesSortedAsc: `${sortAsc}`,
    seriesSortedDsc: `${sortDsc}`,
    seriesAvg: `${theAvg}`,
  });
});

module.exports = router;
