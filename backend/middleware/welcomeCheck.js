const welcomeCheck = (req, res, next) => {
  const userData = { inValid: true, msg: '' };

  if (typeof req.body.name == 'undefined' || req.body.name.length == 0) {
    req.userData = { ...userData, msg: 'Name missing' };
    next();
  }
  if (!(req.body.gender == 'M' || req.body.gender == 'F')) {
    req.userData = { ...userData, msg: 'invalid gender' };
    next();
  }
  const d = new Date(req.body.dob);

  // const earliestDate = new Date(0);  // January 1, 1970
  // const latestDate = new Date(8640000000000000);  // Approximately December 31, 275760

  // console.log(earliestDate.toUTCString());  // Outputs: Thu, 01 Jan 1970 00:00:00 GMT
  // console.log(latestDate.toUTCString());    // Outputs: Sat, 13 Sep 275760 00:00:00 GMT

  // Javascript Quirks: https://medium.com/@clairenguyen/javascript-quirks-a5cffbb49a0e
  // Null is an Object in JS => using getTime() becomes necessary

  if (Object.prototype.toString.call(d) === '[object Date]') {
    if (isNaN(d.getTime())) {
      req.userData = { ...userData, msg: 'Invalid date' };
      next();
    }
  } else {
    req.userData = { ...userData, msg: 'Invalid date' };
    next();
  }
  req.userData = { ...userData, inValid: false, msg: 'Valid data' };
  next();
};

module.exports = welcomeCheck;
