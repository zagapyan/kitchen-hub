import React from 'react'
import { shallow } from 'enzyme'

import Routes from './Routes'

describe('Routes', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Routes {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})