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
  const userData = { inValid: true, msg: '' };

  if (typeof req.params.opr == 'undefined' || req.params.opr.length == 0) {
    req.userData = { ...userData, msg: 'Operator missing' };
    next();
  }
  if (
    !(
      req.params.opr == 'sum' ||
      req.params.opr == 'mul' ||
      req.params.opr == 'div'
    )
  ) {
    req.userData = { ...userData, msg: 'Invalid operator' };
    next();
  }
  if (req.params.opr == 'div' && parseFloat(req.query.arg2) < 0.000000001) {
    req.userData = { ...userData, msg: 'Division by zero' };
    next();
  }
  if (!(Object.hasOwn(req.query, 'arg1') && Object.hasOwn(req.query, 'arg2'))) {
    req.userData = { ...userData, msg: 'one of the argument is missing' };
    next();
  }
  if (
    typeof req.query.arg1 == 'undefined' ||
    req.query.arg1.length == 0 ||
    isNaN(req.query.arg1)
  ) {
    req.userData = { ...userData, msg: 'invalid argument1 ' };
    next();
  }
  if (
    typeof req.query.arg2 == 'undefined' ||
    req.query.arg2.length == 0 ||
    isNaN(req.query.arg2)
  ) {
    req.userData = { ...userData, msg: 'invalid argument2 ' };
    next();
  }
  req.userData = { ...userData, inValid: false, msg: 'Valid data' };
  next();
};

module.exports = calCheck;
