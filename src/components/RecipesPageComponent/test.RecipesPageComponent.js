import React from "react";
import { shallow } from "enzyme";

import RecipesPageComponent from "./RecipesPageComponent";

describe("RecipesPageComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<RecipesPageComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
