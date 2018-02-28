import React from "react";
import { shallow } from "enzyme";

import EditPageComponent from "./EditPageComponent";

describe("EditPageComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<EditPageComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
