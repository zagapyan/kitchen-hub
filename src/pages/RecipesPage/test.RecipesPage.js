import React from 'react'
import { shallow } from 'enzyme'

import RecipesPage from './RecipesPage'

describe('RecipesPage', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<RecipesPage {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})