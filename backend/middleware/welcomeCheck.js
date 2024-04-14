const welcomeCheck = (req, res, next) => {
  if (typeof req.body.name == 'undefined' || req.body.name.length == 0) {
    console.log('Here');
    return res
      .status(400)
      .json({ eCode: 'ERROR', msg: 'Name not provided', user: {} });
    // return res.json([{ eCode: 'ERROR', msg: 'Name not provided', user: {} }]);
  }
  if (!(req.body.gender == 'M' || req.body.gender == 'F')) {
    return res
      .status(400)
      .json({ eCode: 'ERROR', msg: 'Invalid Gender Specified', user: {} });
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
      return res
        .status(400)
        .json({ eCode: 'ERROR', msg: 'Invalid Date Specified', user: {} });
    }
  } else {
    return res
      .status(400)
      .json({ eCode: 'ERROR', msg: 'Invalid Date Specified', user: {} });
  }

  next();
};

module.exports = welcomeCheck;
