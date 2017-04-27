const googleTrends = require('google-trends-api');
const app = require('../server');

const trendQuery = (keyword, callback) => {
  const options = {
    keyword: keyword
    // startTime: today,
    // endTime: 
  };

  googleTrends.interestOverTime(options)
  .then((results) => {
    console.log(results)
    callback(results);
  })
  .catch((err) => {
    console.error('Error getting trends:', err);
  });
};

module.exports = trendQuery;
