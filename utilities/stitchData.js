// For each story,
  // Find timeline point with matching date
  // Insert stories key from story into matching point
// Return timeline

module.exports = (timeline, stories) => {
  const thisTimeline = timeline.slice();
  const timelineDates = timeline.map(point => point.date);

  stories.forEach(story => {
    thisTimeline.forEach(point => {
      if (point.date === story.date) {
        point['stories'] = story.stories;
      }
    });
  });

  return thisTimeline;

  // for (let story of stories) {
  //   if (!timelineDates.includes(story.date)) {
  //     throw new Error(`Story date matches no timeline dates: ${story}`);
  //   }

  //   timeline.forEach(point => {
  //     if (point.date === story.date) {
  //       point['stories'] = story.stories;
  //     }
  //   });
  // }
};
