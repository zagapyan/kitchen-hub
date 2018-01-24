import React from 'react'
import { shallow } from 'enzyme'

import IndexComponent from './IndexComponent'

describe('IndexComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<IndexComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})