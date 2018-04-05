import React from 'react'
import { shallow } from 'enzyme'

import CardItemComponent from './CardItemComponent'

describe('CardItemComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<CardItemComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})