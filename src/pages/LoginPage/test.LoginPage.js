import React from 'react'
import { shallow } from 'enzyme'

import LoginPage from './LoginPage'

describe('LoginPage', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<LoginPage {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})