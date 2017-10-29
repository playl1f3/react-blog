import React from 'react'
import {shallow, mount} from 'enzyme'
import App from './App'
import Home from './Home'
jest.mock('getBlog')

describe('App', () => {
  it('App renders Welcome to React', () => {
    const welcome = shallow(<App />);
    expect(welcome.find('h2').text()).toEqual('Welcome to React');
  });
});

describe('Home rendering', () => {
  let home
  beforeEach(() => {
    home = shallow(<Home/>)    
  })

  it('Home renders the title Home', () => {
    expect(home.find('h2').text()).toEqual('Home')
  })

  it('Home renders a button Add Blog Post', () => {
    expect(home.find('Button')).toBeDefined()
  })
})

describe('Home button click', () => {
  let home
  beforeEach(() => {
    home = shallow(<Home/>)
  })

  it('Button click calls', () => {
    const button = home.find('button').first()
    button.simulate('click')
  })

})




