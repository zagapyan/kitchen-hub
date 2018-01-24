import React from 'react'
import { shallow } from 'enzyme'

import NoMatchComponent from './NoMatchComponent'

describe('NoMatchComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<NoMatchComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})