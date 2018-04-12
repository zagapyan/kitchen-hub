import React from "react";
import { shallow } from "enzyme";
// import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import IndexComponent from "./IndexComponent";

describe("IndexComponent", () => {
  let component, props;
  // let middlewares = []
  // let mockStore = configureStore(middlewares)
  
  let initialState = {
    recipes: []
  }
  let store = mockStore(initialState)

  beforeEach(() => {
    props = {
      recipes: []
    };
    component = shallow(<Provider store={store}><IndexComponent {...props} /></Provider>);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
