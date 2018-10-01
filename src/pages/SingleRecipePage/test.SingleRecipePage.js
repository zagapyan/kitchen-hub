import React from 'react'
import { shallow } from 'enzyme'

import SingleRecipePage from './SingleRecipePage'

describe('SingleRecipePage', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<SingleRecipePage {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})