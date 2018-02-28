import React from "react";
import { shallow } from "enzyme";

import RecipePageComponent from "./RecipePageComponent";

describe("RecipePageComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<RecipePageComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
