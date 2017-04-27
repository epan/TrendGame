const sanitizeTrend = (rawTimeline) => {
  let sanitized = [];
  rawTimeline.default.timelineData.forEach((point) => {
    let sanitizedPoint = {
      time: parseInt(point.time),
      formattedTime: point.formattedTime,
      formattedAxisTime: point.formattedAxisTime,
      value: point.value[0]
    };
    sanitized.push(sanitizedPoint);
  });
  return sanitized
};

module.exports = sanitizeTrend;
