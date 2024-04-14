// without Error Codes

// const calCheck = (req, res, next) => {
//   if (!(req.params.opr == 'sum' || req.params.opr == 'mul' || req.params.opr == 'div')) {
//     return res.json([
//       { resCode: 'ERROR', msg: 'Invalid Operation', theJob: {}, output: {} },
//     ]);
//   }
//   if (!(Object.hasOwn(req.query, 'arg1') && Object.hasOwn(req.query, 'arg2'))) {
//     return res.json([
//       {
//         resCode: 'ERROR',
//         msg: 'One of the argument is missing',
//         theJob: {},
//         output: {},
//       },
//     ]);
//   }
//   if (isNaN(req.query.arg1) || typeof req.query.arg1 == 'undefined') {
//     return res.json([
//       {
//         resCode: 'ERROR',
//         msg: 'Argument1 is missing',
//         theJob: {},
//         output: {},
//       },
//     ]);
//   }
//   if (isNaN(req.query.arg2) || typeof req.query.arg2 == 'undefined') {
//     return res.json([
//       {
//         resCode: 'ERROR',
//         msg: 'Argument2 is missing',
//         theJob: {},
//         output: {},
//       },
//     ]);
//   }
//   next();
// };

// with Error Codes

const calCheck = (req, res, next) => {
  if (typeof req.params.opr == 'undefined' || req.params.opr.length == 0) {
    return res.status(400).json({
      eCode: 'ERROR',
      msg: 'Operator not provided',
      theJob: {},
      output: {},
    });
  }
  if (
    !(
      req.params.opr == 'sum' ||
      req.params.opr == 'mul' ||
      req.params.opr == 'div'
    )
  ) {
    return res
      .status(400)
      .json({
        eCode: 'ERROR',
        msg: 'Invalid Operator',
        theJob: {},
        output: {},
      });
  }
  if (req.params.opr == 'div' && parseFloat(req.query.arg2) < 0.000000001) {
    return res.status(400).json({
      eCode: 'ERROR',
      msg: 'Invalid Operation - Division by zero',
      theJob: {},
      output: {},
    });
  }
  if (!(Object.hasOwn(req.query, 'arg1') && Object.hasOwn(req.query, 'arg2'))) {
    return res.status(400).json({
      eCode: 'ERROR',
      msg: 'One of the argument is missing',
      theJob: {},
      output: {},
    });
  }
  if (
    typeof req.query.arg1 == 'undefined' ||
    req.query.arg1.length == 0 ||
    isNaN(req.query.arg1)
  ) {
    return res.status(400).json({
      eCode: 'ERROR',
      msg: 'Argument1 is invalid',
      theJob: {},
      output: {},
    });
  }
  if (
    typeof req.query.arg2 == 'undefined' ||
    req.query.arg2.length == 0 ||
    isNaN(req.query.arg2)
  ) {
    return res.status(400).json({
      eCode: 'ERROR',
      msg: 'Argument2 is invalid',
      theJob: {},
      output: {},
    });
  }
  next();
};

module.exports = calCheck;
