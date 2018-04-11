import React from "react";
import { shallow } from "enzyme";
import { store } from '../../store';
import IndexComponent from "./IndexComponent";

describe("IndexComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<IndexComponent store={store} {...props} />);
  });

  // it("should", () => {
  //   expect(component).toMatchSnapshot();
  // });
});
