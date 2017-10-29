import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Comments from './Comments';

describe('Comments', () => {
  let comments
  beforeEach(() => {
    comments = shallow(<Comments comments={[{ user: 'user1', content: 'content1' }, { user: 'user2', content: 'content2' }]} />)    
  })

  it('renders without crashing', () => {
    expect(comments.find('Panel').length).toEqual(2)
  })

  it('renders the correct first user', () => {
    expect(comments.find('div').at(1).text()).toEqual('user1:')
  })

  it('renders the correct first content', () => {
    expect(comments.find('div').at(2).text()).toEqual('content1')
  })
})
