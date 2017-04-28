const googleTrends = require('google-trends-api');
const backDateByMonths = require('./backDate');
const sanitizeTrend = require('./sanitizeTrend');

const trendQuery = (keyword, callback) => {
  const options = {
    keyword: keyword,
    startTime: backDateByMonths(15),
  };

  googleTrends.interestOverTime(options)
  .then((results) => {
    callback(sanitizeTrend(JSON.parse(results)));
  })
  .catch((err) => {
    console.error('Error getting trends:', err);
  });
};

module.exports = trendQuery;
