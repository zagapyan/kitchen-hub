import React from 'react'
import { shallow } from 'enzyme'

import ListItemComponent from './ListItemComponent'

describe('ListItemComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ListItemComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})