const seriesCheck = (req, res, next) => {
  const ar = req.body.series;
  for (let i = 0; i < ar.length; i++) {
    if (!(typeof ar[i] === 'number'))
      return res.status(400).json({
        eCode: 'ERROR',
        msg: 'The array contains invalid number',
        seriesSum: '',
        seriesMax: '',
        seriesMin: '',
        seriesSortedAsc: '',
        seriesSortedDsc: '',
        seriesAvg: '',
      });
  }
  next();
};

module.exports = seriesCheck;
