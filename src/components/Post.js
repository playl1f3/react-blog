import React from 'react'; 

const Post = ({postContent}) => {
  return (
    <div>
      <h2>{postContent.title}</h2>
      {postContent.content}
    </div>
  );
}

export default Post;