import React from "react";
import { shallow } from "enzyme";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import ListItemComponent from './ListItemComponent'

describe('ListItemComponent', () => {
  let component, props
  let middlewares = []
  let mockStore = configureStore(middlewares)
  
  let initialState = {}
  let store = mockStore(initialState)
  
  beforeEach(() => {
    props = {}
    component = shallow(<Provider store={store}><ListItemComponent {...props} /></Provider>)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})