import React from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Content = ({data}) => {

  return(
    <div>
        {data.map((items, i) => (
          <Panel key={i} header={items.title}>
            {items.content}
            <br/>
            <Link to={`post/${items.id}`}>Continue reading ...</Link>
          </Panel>
        ))
        }
    </div>
  )
}

export default Content;