import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import RecipeControlComponent from './RecipeControlComponent'

describe('RecipeControlComponent', () => {
  let component, props
  let middlewares = []
  let mockStore = configureStore(middlewares)
  
  let initialState = {}
  let store = mockStore(initialState)
  
  beforeEach(() => {
    props = {}
    component = shallow(<Provider store={store}><RecipeControlComponent {...props} /></Provider>)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})