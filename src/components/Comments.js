import React from 'react';
import { Panel } from 'react-bootstrap';

const Comments = ({comments}) => {

  return (
    <div>
      <h2>Comments</h2>
    {comments.map((comment,i) => (
      <Panel key={i}>
        <div>{comment.user}:</div>
        <div>{comment.content}</div>
      </Panel>
    ))}
    </div>
  )
}

export default Comments