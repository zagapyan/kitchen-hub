import React from 'react'
import { shallow } from 'enzyme'

import LoginComponent from './LoginComponent'

describe('LoginComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<LoginComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})