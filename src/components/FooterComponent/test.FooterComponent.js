import React from 'react'
import { shallow } from 'enzyme'

import FooterComponent from './FooterComponent'

describe('FooterComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<FooterComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})