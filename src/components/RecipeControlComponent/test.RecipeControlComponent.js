import React from 'react'
import { shallow } from 'enzyme'

import RecipeControlComponent from './RecipeControlComponent'

describe('RecipeControlComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<RecipeControlComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})