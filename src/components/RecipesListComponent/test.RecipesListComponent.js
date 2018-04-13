import React from 'react'
import { shallow } from 'enzyme'

import RecipesListComponent from './RecipesListComponent'

describe('RecipesListComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<RecipesListComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})