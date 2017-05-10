import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ storyPoint }) => {
  console.log('storyPoint', storyPoint);
  return (
    <div>
      <Article/>
    </div>
  );
};

export default ArticleList;
