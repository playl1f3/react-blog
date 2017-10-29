import React from 'react'
import {shallow} from 'enzyme'
import {getBlog} from './getblog'
jest.mock('./request')

describe('getBlog', () => {
  it('get mock data from blog api', () => {
    getBlog('').then(data => expect(data.length).toEqual(12))
  })
})