import React from 'react'
import { shallow } from 'enzyme'

import HeaderComponent from './HeaderComponent'

describe('HeaderComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<HeaderComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})