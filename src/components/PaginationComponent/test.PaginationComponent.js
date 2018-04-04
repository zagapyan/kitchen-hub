import React from 'react'
import { shallow } from 'enzyme'

import PaginationComponent from './PaginationComponent'

describe('PaginationComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<PaginationComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})