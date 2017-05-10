import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  console.log('storyPoint', storyPoint);
  console.log('doesn\'t have stories', (!storyPoint.hasOwnProperty('stories')));
  let articles;

  if (!storyPoint.hasOwnProperty('stories')) {
    articles = <div>no story point yet</div>;
  } else {
    let { formattedTime, stories } = storyPoint;
    articles = (
      <div>
        <h2>Top news stories for {formattedTime}</h2>
        {stories.map(story => {
          return <Article key={story.url} story={story}/>;
        })}
      </div>
    );
  }
  return articles;
};

export default ArticleList;
